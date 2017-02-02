import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Input.css';

const Input = ({ value, id, type, placeholder, onChange, css, values, pretext, height, postChange }) => {
  let vals = values !== undefined ? values : {};

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
  let val = vals[valId] !== undefined ? vals[valId] : '';
  val = value !== undefined ? value : val;
  return (
    <div styleName="box" style={css} styleName={(pretext.length ? 'pretext' : '')}>
      {(pretext.length ? <span>{pretext}</span> : '')}
      {
        (type === 'multi') ?
        (<textarea name={valId} placeholder={placeholder} value={val} onChange={change} />) :
        (<input
          styleName="inp"
          type={type}
          name={valId}
          placeholder={placeholder}
          value={val}
          onChange={change}
        />)
      }
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
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
