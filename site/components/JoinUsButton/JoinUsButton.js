import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './JoinUsButton.css';
import Link from '../Link/Link';

const JoinUsButton = () => {
  const to = window.location.pathname.indexOf('join-us') > -1 ? '/be-there' : '/join-us';
  return (
    <Link styleName="button" to={to} className="joinusbuttonticket" />
  );
};

export default CSSModules(JoinUsButton, styles);
