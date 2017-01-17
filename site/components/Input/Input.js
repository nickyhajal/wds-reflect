import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Input.css';

const Input = ({ id, type, placeholder, onChange }) => (
  <div styleName="box">
    <input type={type} name={id} placeholder={placeholder} onChange={onChange} />
  </div>
);

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
};

export default CSSModules(Input, styles);
