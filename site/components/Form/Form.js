import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import axios from 'axios';
import _ from 'lodash';
import styles from './Form.css';
import Input from '../Input/Input';
import Address from '../Address/Address';
import FormRow from '../FormRow/FormRow';
import FormWrap from '../FormWrap/FormWrap';
import Username from '../Username/Username';
import $ from 'jquery';
import Button from '../Button/Button';

class Form extends Component {
  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      form: {},
      status: 'ready',
    };
  }
  componentDidMount(props) {
    if (this.props.values !== undefined) {
      this.processValues(this.props.values);
    }
  }
  componentWillReceiveProps(props) {
    if (props.values !== undefined) {
      this.processValues(props.values);
    }
  }
  getValues() {
    const form = this.state.form;
    const final = {};
    Object.keys(_.clone(form)).forEach((i) => {
      if (i.indexOf('flat__') > -1) {
        const bits = i.replace('flat__', '').split('__');
        if (final[bits[0]] === undefined) {
          final[bits[0]] = {};
        }
        final[bits[0]][`q-${bits[1]}`] = form[i];
      } else {
        if (i !== 'answers') {
          final[i] = form[i];
        }
      }
    });
    return final;
  }
  processValues(vals) {
    const form = {};
    Object.keys(vals).forEach((i) => {
      if (vals[i] !== undefined && vals[i] !== null && typeof vals[i] === 'object') {
        Object.keys(vals[i]).forEach((j) => {
          form[`flat__${i}__${j}`] = vals[i][j];
        });
      } else {
        form[i] = vals[i];
      }
    });
    this.setState({ form });
  }
  submit(e) {
    e.preventDefault();
    e.stopPropagation();
    const actions = [];
    this.setState({ status: 'loading' });
    if (this.props.list !== undefined && this.props.list) {
      actions.push(this.submitToList);
    }
    if (this.props.onSubmit !== undefined && this.props.onSubmit) {
      actions.push(() => this.props.onSubmit(this));
    }
    actions[0](this.state.form)
    .then(this.finish)
    .catch((msg) => {
      this.finish({ err: msg, showMsg: true });
    });
  }
  submitToList() {
    return new Promise((resolve, reject) => {
      const req = {
        method: 'post',
        withCredentials: true,
        url: 'https://api.worlddominationsummit.com/api/user/addToList',
      };
      let form = this.state.form;
      if (this.props.defaults !== undefined) {
        form = _.defaultsDeep(this.state.form, this.props.defaults);
      }
      req.params = {
        list: this.props.list,
        name: form.full_name,
        email: form.email,
        custom: (form.custom !== undefined) ? form.custom : undefined,
      };
      axios(req)
      .then(resolve)
      .catch(reject);
    });
  }
  error(err, rsp) {
    console.log(err, rsp);
  }
  finish(rsp) {
    console.log('1')
    if (rsp !== undefined && rsp.err) {
      console.log(rsp);
    console.log('2')
      if (rsp.showMsg) {
    console.log('3')
        this.setState({ status: 'error', errorMsg: rsp.err });
      } else {
    console.log('4')
        this.setState({ status: 'error' });
      }
    console.log('5')
      if (this.props.onError) {
    console.log('6')
        this.props.onError(rsp);
      }
    console.log('7')
      setTimeout(() => {
    console.log('8')
        this.setState({ status: 'ready', showErrorMsg: false });
      }, 4000);
    } else {
    console.log('9')
      this.setState({ status: 'success', showErrorMsg: false });
      if (this.props.onSuccess) {
    console.log('10')
        this.props.onSuccess(rsp, this);
      }
    }
  }
  change(e) {
    const elm = e.target;
    const form = this.state.form;
    const name = elm.name;
    if (name && name.length) {
      form[name] = elm.value;
      this.setState({ form });
    }
  }
  clear() {
    this.setState({ form: {} });
    $('input', $(this.shell)).first().focus();
  }
  reset() {
    this.setState({ status: 'ready' });
  }
  setForm(form) {
    if (form !== null) {
      this.shell = form;
    }
  }
  render() {
    let btnText = this.props.buttonStart;
    if (this.state.status === 'loading') {
      btnText = this.props.buttonProgress;
    } else if (this.state.status === 'success') {
      btnText = this.props.buttonSuccess;
    } else if (this.state.status === 'error') {
      if (this.state.errorMsg !== undefined) {
        btnText = this.state.errorMsg;
      } else {
        btnText = this.props.buttonError;
      }
    }
    const children = [];
    let propsChildren = this.props.children;
    let c = 0;
    if (!_.isArray(propsChildren)) {
      propsChildren = [propsChildren];
    }
    propsChildren.forEach((elm) => {
      if (
        elm.type === Input ||
        elm.type === FormRow ||
        elm.type === FormWrap ||
        elm.type === Address ||
        elm.type === Username ||
        elm.type === 'input' ||
        elm.type === 'select'
      ) {
        const props = Object.assign({}, elm.props);
        props.onChange = this.change;
        props.values = _.clone(this.state.form);
        props.key = `formrow-${c}`;
        children.push(React.createElement(elm.type, props));
        c += 1;
      } else {
        children.push(elm);
      }
    });
    return (
      <form ref={this.setForm} action="" method="post" styleName="form" onSubmit={this.submit} className={this.props.className} >
        { children }
        <Button styling={this.props.buttonStyle} width="100%">{btnText}</Button>
      </form>
    );
  }
}

Form.defaultProps = {
  action: '#',
  method: 'ajax',
  buttonStart: 'Send',
  buttonSuccess: 'Success!',
  buttonError: 'Hm, there was a problem.',
  onSuccess: false,
  onError: false,
  buttonProgress: 'Sending...',
  buttonStyle: 'dark',
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onSuccess: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
  onError: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
  values: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  onSubmit: PropTypes.func,
  defaults: PropTypes.objectOf(PropTypes.string),
  list: PropTypes.string,
  buttonStart: PropTypes.string,
  buttonStyle: PropTypes.string,
  buttonProgress: PropTypes.string,
  buttonSuccess: PropTypes.string,
  buttonError: PropTypes.string,
};

export default CSSModules(Form, styles);
