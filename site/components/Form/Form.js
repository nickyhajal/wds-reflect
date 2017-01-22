import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import axios from 'axios';
import _ from 'lodash';
import styles from './Form.css';
import Input from '../Input/Input';
import FormRow from '../FormRow/FormRow';
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
  submit(e) {
    e.preventDefault();
    e.stopPropagation();
    const actions = [];
    this.setState({ status: 'loading' });
    if (this.props.list !== undefined && this.props.list) {
      actions.push(this.submitToList);
    }
    actions[0]().then(this.finish);
  }
  submitToList() {
    return new Promise((resolve, reject) => {
      const req = {
        method: 'post',
        withCredentials: true,
        url: 'http://api.worlddominationsummit.com/api/user/addToList',
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
      .then(resolve);
    });
  }
  finish() {
    this.setState({ status: 'success' });
    if (this.props.onSuccess) {
      this.props.onSuccess();
    }
  }
  change(e) {
    const elm = e.target;
    let form = this.state.form;
    form[elm.name] = elm.value;
    this.setState({ form });
  }
  render() {
    let btnText = this.props.buttonStart;
    if (this.state.status === 'loading') {
      btnText = this.props.buttonProgress;
    } else if (this.state.status === 'success') {
      btnText = this.props.buttonSuccess;
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
        elm.type === 'input' ||
        elm.type === 'select'
      ) {
        const props = Object.assign({}, elm.props);
        props.onChange = this.change;
        props.key = `formrow-${c}`;
        children.push(React.createElement(elm.type, props));
        c += 1;
      } else {
        children.push(elm);
      }
    });
    return (
      <form action="" method="post" onSubmit={this.submit}>
        { children }
        <Button styling="dark" width="100%">{btnText}</Button>
      </form>
    );
  }
}

Form.defaultProps = {
  action: '#',
  method: 'ajax',
  buttonStart: 'Send',
  buttonSuccess: 'Success!',
  onSuccess: false,
  buttonProgress: 'Sending...',
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
  defaults: PropTypes.objectOf(PropTypes.string),
  list: PropTypes.string,
  buttonStart: PropTypes.string,
  buttonProgress: PropTypes.string,
  buttonSuccess: PropTypes.string,
};

export default CSSModules(Form, styles);
