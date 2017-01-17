import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

export const ForgotForm = ({
  change,
  submit,
}) => (
  <div styleName="shell">
    <h2>Reset Your Password</h2>
    <form onSubmit={submit}>
      <input
        type="text"
        name="email"
        onChange={change}
        placeholder="E-Mail Address"
      />
      <button>Send Reset E-Mail</button>
    </form>
  </div>
);

ForgotForm.propTypes = {
  change: PropTypes.func,
  submit: PropTypes.func,
};

export default CSSModules(ForgotForm, styles);

