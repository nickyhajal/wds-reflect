import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import auth from '~/utils/auth';
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

import LoginForm from './components/LoginForm';
import ForgotForm from './components/ForgotForm';

export class Auth extends Component {

  static propTypes = {
    auth: PropTypes.shape({
      status: PropTypes.string,
      error: PropTypes.string,
    }),
  };

  constructor(props) {
    super(props);
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      email: '',
      pw: '',
      active: 'login',
    };
  }

  setActive(active) {
    this.setState({ active });
  }

  change(e) {
    const t = e.target;
    const state = {};
    state[t.name] = t.value;
    this.setState(state);
  }

  submit(e) {
    if (e !== undefined) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (this.state.active === 'login') {
      auth.login(this.state.email, this.state.pw);
    } else if (this.state.active === 'reset') {
      auth.reset(this.state.email);
    }
  }

  renderForm() {
    let component = LoginForm;
    if (this.state.active === 'reset') {
      component = ForgotForm;
    }
    return React.createElement(component, {
      email: this.state.email,
      pw: this.state.pw,
      change: this.change,
      submit: this.submit,
      status: this.props.auth.status,
      error: this.props.auth.error,
    });
  }
  render() {
    return (
      <div styleName="shell">
        <h2>WDS Admin Login</h2>
        {this.renderForm()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
  };
}

export default connect(mapStateToProps)(CSSModules(Auth, styles));

