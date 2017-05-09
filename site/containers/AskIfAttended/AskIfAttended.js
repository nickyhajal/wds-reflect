import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './AskIfAttended.css';

const AskIfAttended = ({ goTo }) => (
  <div className="modal-section" styleName="ask">
    <h2>Do you have a WDS Account?</h2>
    <p>
      If you've attended WDS or a WDS Academy in the past, we'll connect to your
      existing account.
    </p>
    <button styleName="bigButton" onClick={() => goTo('login')}>
      Yup, let's connect my account!
    </button>
    <button styleName="bigButton" onClick={() => goTo('signup')}>
      It's my first time!
    </button>
  </div>
);
AskIfAttended.propTypes = {
  goTo: PropTypes.func,
};

export default CSSModules(AskIfAttended, styles);
