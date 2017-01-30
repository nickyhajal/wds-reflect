import React, { PropTypes } from 'react';
import _ from 'lodash';
import CSSModules from 'react-css-modules';
import styles from './FormWrap.css';
import Input from '../Input/Input';
import FormRow from '../FormRow/FormRow';


const FormWrap = ({ onChange, children, values }) => {
  const newChildren = [];
  const childArray = Array.isArray(children) ? children : [children];
  let c = 0;
  childArray.forEach((elm) => {
    if (
        elm.type === Input ||
        elm.type === FormRow ||
        elm.type === 'input' ||
        elm.type === 'select'
      ) {
      const props = _.clone(elm.props);
      props.onChange = onChange;
      props.values = _.clone(values);
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
      <div className="clear" />
    </div>
  );
};

FormWrap.defaultProps = {
};

FormWrap.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  values: PropTypes.objectOf(PropTypes.string),
  key: PropTypes.string,
};

export default CSSModules(FormWrap, styles);
