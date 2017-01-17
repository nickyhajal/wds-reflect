import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

export function loginText(state) {
  let str = '';
  if (state === 'ready') {
    str = 'Login';
  } else if (state === 'loading') {
    str = 'Logging in...';
  } else if (state === 'error') {
    str = 'There was a problem...';
  } else if (state === 'success') {
    str = 'Logged In!';
  }
  return str;
}

export const LoginForm = ({
  change,
  submit,
  status,
  switchView,
}) => (
  <form onSubmit={submit} method="post">
    <input
      type="text"
      name="email"
      onChange={change}
      placeholder="E-Mail Address"
    />
    <input
      type="password"
      name="pw"
      onChange={change}
      placeholder="Password"
    />
    <button className="submit">{loginText(status)}</button>
    <button className="text-button" onClick={() => switchView('forgot')}>Forgot your password?</button>
  </form>
);

LoginForm.propTypes = {
  change: PropTypes.func,
  switchView: PropTypes.func,
  submit: PropTypes.func,
  status: PropTypes.string,
};

export default CSSModules(LoginForm, styles);

