import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Input.css';

const Input = ({ id, type, placeholder, onChange, css, values, pretext }) => {
  const vals = values !== undefined ? values : {};
  const value = vals[id] !== undefined ? vals[id] : '';
  return (
    <div styleName="box" style={css} styleName={(pretext.length ? 'pretext' : '')}>
      {(pretext.length ? <span>{pretext}</span> : '')}
      <input type={type} name={id} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.string),
  placeholder: PropTypes.string,
  pretext: PropTypes.string,
  onChange: PropTypes.func,
  css: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
  pretext: '',
  style: {},
};

const Wrapped = CSSModules(Input, styles);
Wrapped.typeStr = 'Input';

export default Wrapped;
