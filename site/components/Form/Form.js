import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
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
    const form = this.state.form;
  }
  change(e) {
    const elm = e.target;
    const form = this.state.form;
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
    let c = 0;
    this.props.children.forEach((elm) => {
      if (elm.type === Input || elm.type === FormRow) {
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
  buttonProgress: 'Sending...',
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  buttonStart: PropTypes.string,
  buttonProgress: PropTypes.string,
  buttonSuccess: PropTypes.string,
};

export default CSSModules(Form, styles);
