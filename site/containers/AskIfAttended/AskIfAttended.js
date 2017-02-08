import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './AskIfAttended.css';

const AskIfAttended = ({ goTo }) =>
  (
    <div className="modal-section" styleName="ask">
      <h2>Have you attended WDS before?</h2>
      <p>If you&apos;ve attended WDS in the past, we&apos;ll connect to your
      existing account.</p>
      <button styleName="bigButton" onClick={() => goTo('login')}>Yup, let&apos;s connect my account!</button>
      <button styleName="bigButton" onClick={() => goTo('signup')}>It&apos;s my first time!</button>
    </div>
  );
AskIfAttended.propTypes = {
  goTo: PropTypes.func,
};

export default CSSModules(AskIfAttended, styles);
