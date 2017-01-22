import React, { PropTypes } from 'react';
import _ from 'lodash';
import cx from 'classnames';
import Block from '../Block/Block';

const processChildren = (props) => {
  const out = [];
  let childArray = props.children;
  if (!_.isArray(props.children)) {
    childArray = [childArray];
  }
  childArray.forEach((elm, i) => {
    const gutter = 32;
    const powerProps = _.pick(props, ['textAlign']);
    const elmProps = Object.assign({ css: {}, anchor: 'left' }, props, elm.props, powerProps);
    elmProps.key = `grid-${i}`;
    elmProps.className = cx('grid-block', props.className);
    elmProps.align = '';
    if (props.numCols !== undefined) {
      elmProps.width = (parseInt(props.width, 10) / props.numCols) - ((gutter * (props.numCols - 1)) / props.numCols);
      elmProps.className = cx(`grid-cols-${props.numCols}`, elmProps.className);
      if ((i + 1) % props.numCols) {
        elmProps.margin = `0 ${gutter}px ${gutter}px 0`;
        elmProps.css.clear = 'left';
      }
    }
    out.push(React.createElement(Block, elmProps));
  });
  return out;
};
const Grid = (props) => {
  const p = Object.assign({ width: '996' }, props);
  if (p.css === undefined) { p.css = {}; }
  p.css.padding = props.padding;
  return (<Block {...p}>
    {processChildren(props)}
    <div className="clear" />
  </Block>);
};

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  padding: PropTypes.string,
};
Grid.defaultProps = {
  width: '996',
};

export default Grid;
