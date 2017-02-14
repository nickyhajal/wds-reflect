import React, { PropTypes } from 'react';
import _ from 'lodash';
import CSSModules from 'react-css-modules';
import styles from './FormWrap.css';
import Input from '../Input/Input';
import Username from '../Username/Username';
import ShirtSize from '../ShirtSize/ShirtSize';
import Phone from '../Phone/Phone';
import FormRow from '../FormRow/FormRow';


const FormWrap = (props) => {
  const { onChange, children, values } = props;
  const newChildren = [];
  const childArray = Array.isArray(children) ? children : [children];
  let c = 0;
  childArray.forEach((elm) => {
    if (
        elm.type === Input ||
        elm.type === Username ||
        elm.type === Phone ||
        elm.type === FormRow ||
        elm.type === ShirtSize ||
        elm.type === 'input' ||
        elm.type === 'select'
      ) {
      const fProps = _.clone(elm.props);
      fProps.onChange = onChange;
      fProps.values = _.clone(values);
      fProps.key = `formrowcontent-${c}`;
      newChildren.push(React.createElement(elm.type, fProps));
      c += 1;
    } else {
      newChildren.push(elm);
    }
  });
  return (
    <div styleName="row" {...props}>
      { newChildren }
      <div className="clear" />
    </div>
  );
};

FormWrap.defaultProps = {
};
FormWrap.displayName = 'FormWrap';

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
