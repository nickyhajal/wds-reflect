import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './FormRow.css';
import Input from '../Input/Input';


const FormRow = ({ onChange, children }) => {
  const newChildren = [];
  const childArray = Array.isArray(children) ? children : [children];
  let c = 0;
  childArray.forEach((elm) => {
    if (elm.type === Input) {
      const props = Object.assign({}, elm.props);
      props.onChange = onChange;
      props.key = `formrowcontent-${c}`;
      newChildren.push(React.createElement(elm.type, props));
      c += 1;
    } else {
      newChildren.push(elm);
    }
  });
  return (
    <div styleName="row">
      { newChildren }
      <div className="clear"></div>
    </div>
  );
};

FormRow.defaultProps = {
};

FormRow.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  key: PropTypes.string,
};

export default CSSModules(FormRow, styles);
