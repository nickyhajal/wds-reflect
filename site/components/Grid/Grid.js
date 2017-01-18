import React, { PropTypes } from 'react';

const Grid = props => (
  <div style={{ padding: props.padding }}>
    {props.children}
    <div className="clear" />
  </div>
);

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  padding: PropTypes.string,
};
Grid.defaultProps = {
  padding: '50px 0',
};

export default Grid;
