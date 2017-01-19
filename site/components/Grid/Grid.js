import React, { PropTypes } from 'react';
import Block from '../Block/Block';

const Grid = (props) => {
  let p = Object.assign({}, props);
  if (p.css === undefined) { p.css = {}; }
  p.css.padding = props.padding;
  return (<Block {...p}>
    {props.children}
    <div className="clear" />
  </Block>);
};

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  padding: PropTypes.string,
};
Grid.defaultProps = {
  padding: '50px 0',
  width: '100%',
};

export default Grid;
