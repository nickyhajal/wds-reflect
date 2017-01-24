import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Input.css';

const Input = ({ id, type, placeholder, onChange, css }) => (
  <div styleName="box" style={css}>
    <input type={type} name={id} placeholder={placeholder} onChange={onChange} />
  </div>
);

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  css: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
  style: {},
};

export default CSSModules(Input, styles);
