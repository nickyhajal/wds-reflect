import React, { PropTypes } from 'react';
import _ from 'lodash';
import cx from 'classnames';
import Block from '../Block/Block';
import is from '../../utils/is';

const processChildren = (props) => {
  const out = [];
  let childArray = props.children;
  console.info(childArray);
  if (!_.isArray(props.children)) {
    childArray = [childArray];
  }
  childArray.forEach((elm, i) => {
    const gutter = parseInt(props.gutter, 10);
    const powerProps = _.pick(props, ['textAlign']);
    const elmProps = Object.assign({ css: {}, anchor: 'left' }, props, elm.props, powerProps);
    elmProps.key = `grid-${i}`;
    elmProps.className = cx('grid-block', props.className);
    elmProps.align = '';
    if (props.numCols !== undefined) {
      let numCols = parseInt(props.numCols, 10);
      if (is.tablet() && props.tabletCols !== undefined) {
        numCols = parseInt(props.tabletCols, 10);
      }
      elmProps.width = (parseInt(props.width, 10) / numCols) - ((gutter * (numCols - 1)) / numCols);
      elmProps.className = cx(`grid-cols-${numCols}`, elmProps.className);
      const place = ((i) % (parseInt(numCols, 10)));
      elmProps.css.margin = `0 ${gutter}px ${gutter}px 0`;
      if (place === 0) {
        elmProps.css.clear = 'left';
      } else if (place === (numCols - 1)) {
        elmProps.css.margin = `0 0 ${gutter}px 0`;
      }
    }
    out.push(React.createElement(Block, elmProps));
  });
  return out;
};
const Grid = (props) => {
  const passProps = Object.assign({}, props);
  const p = Object.assign({ width: '996' }, props);
  if (is.tablet()) {
    p.width = window.screen.width - 40;
    passProps.width = p.width;
  }
  if (p.css === undefined) { p.css = {}; }
  p.css.padding = props.padding;
  return (<Block {...p}>
    {processChildren(passProps)}
    <div className="clear" />
  </Block>);
};

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  padding: PropTypes.string,
  gutter: PropTypes.string,
  numCols: PropTypes.string,
  tabletCols: PropTypes.string,
};
Grid.defaultProps = {
  width: '996',
  gutter: '32',
};

export default Grid;
