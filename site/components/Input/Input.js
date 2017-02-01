import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Input.css';

const Input = ({ id, type, placeholder, onChange, css, values, pretext, height, postChange }) => {
  const vals = values !== undefined ? values : {};
  let valId = id;
  if (valId.indexOf('[') > -1) {
    valId = `flat__${valId.replace(/\]/g, '').split('[').join('__')}`;
  }
  let change = onChange;
  if (postChange !== undefined) {
    change = (e) => {
      onChange(e);
      postChange(e);
    };
  }
  const value = vals[valId] !== undefined ? vals[valId] : '';
  return (
    <div styleName="box" style={css} styleName={(pretext.length ? 'pretext' : '')}>
      {(pretext.length ? <span>{pretext}</span> : '')}
      {
        (type === 'multi') ?
        (<textarea name={valId} placeholder={placeholder} value={value} onChange={change} />) :
        (<input
          styleName="inp"
          type={type}
          name={valId}
          placeholder={placeholder}
          value={value}
          onChange={change}
        />)
      }
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.string),
  placeholder: PropTypes.string,
  height: PropTypes.string,
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

Input.displayName = 'Input';
const Wrapped = CSSModules(Input, styles);
Wrapped.typeStr = 'Input';

export default Wrapped;
