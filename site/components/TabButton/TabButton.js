import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './TabButton.css';

const TabButton = (props) => {
  let className = props.active ? 'active ' : '';
  className += 'tab-button';
  if (props.style === 'dots') {
    className += ' tab-button-dot';
  }
  if (props.style === 'simple') {
    className += ' tab-button-simple';
  }
  return (<button onClick={props.onClick} styleName="button" className={className} style={props.css}>{props.children}</button>);
};

TabButton.propTypes = {
  active: PropTypes.bool,
  css: PropTypes.object,
  style: PropTypes.string,
  onClick: PropTypes.func,
};

export default CSSModules(TabButton, styles);
