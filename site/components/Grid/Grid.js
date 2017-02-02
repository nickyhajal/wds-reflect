import React, { PropTypes } from 'react';
import _ from 'lodash';
import autoBind from 'react-autobind';
import cx from 'classnames';
import Block from '../Block/Block';
import $ from 'jquery';
import is from '../../utils/is';

const processChildren = (props) => {
  const out = [];
  let childArray = props.children;
  if (!_.isArray(props.children)) {
    childArray = [childArray];
  }
  childArray.forEach((elm, i) => {
    const gutter = parseInt(props.gutter, 10);
    const powerProps = _.pick(props, ['textAlign']);
    const passed = _.cloneDeep(_.defaults(props.block, { className: '' }));
    const elmProps = Object.assign({ css: {}, anchor: 'left' }, passed, elm.props, powerProps);
    elmProps.key = `grid-${i}`;
    elmProps.className = cx('grid-block', props.className);
    elmProps.align = '';
    if (props.numCols !== undefined) {
      let numCols = parseInt(props.numCols, 10);
      if (is.tablet() && props.tabletCols !== undefined) {
        numCols = parseInt(props.tabletCols, 10);
      }
      if (is.phone()) {
        numCols = 1;
      }
      elmProps.width = (parseInt(props.width, 10) / numCols) - ((gutter * (numCols - 1)) / numCols);
      elmProps.className = cx(`grid-cols-${numCols}`, elmProps.className, passed.className);
      const place = ((i) % (parseInt(numCols, 10)));
      elmProps.css.marginBottom = `${gutter}px`;
      elmProps.css.marginRight = `${gutter}px`;
      elmProps.css.clear = null;
      if (place === 0) {
        elmProps.css.clear = 'left';
      } else if (place === (numCols - 1)) {
        elmProps.css.marginRight = '0';
      }
    }
    out.push(React.createElement(Block, elmProps));
  });
  return out;
};

class Grid extends React.Component {
  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
  }
  componentDidMount() {
    setTimeout(() => {
      this.equalize();
    }, 100);
  }
  componentDidUpdate() {
    this.equalize();
  }
  equalize() {
    if (this.props.equalize) {
      let maxH = 0;
      $('.grid-block', $(this.shell.shell)).each((i, elm) => {
        const $elm = $(elm);
        if ($elm.hasClass('dropped-button')) {
          const btn = $('.button', $elm);
          if (btn.length) {
            btn.css({
              position: 'relative',
              bottom: '',
              left: '',
            });
          }
        }
        maxH = $(elm).height() > maxH ? $(elm).height() : maxH;
      });
      $('.grid-block', $(this.shell.shell)).each((i, elm) => {
        const $elm = $(elm);
        $elm.css('height', `${maxH}px`);
        if ($elm.hasClass('dropped-button')) {
          const btn = $('.button', $elm);
          if (btn.length) {
            const dims = btn.position();
            btn.css({
              position: 'absolute',
              bottom: '28px',
              left: `${dims.left}px`,
            });
          }
        }
      });
    }
  }
  render() {
    const passProps = Object.assign({}, this.props);
    const p = Object.assign({ width: '996' }, this.props);
    if (is.tablet()) {
      p.width = window.screen.width - 40;
      passProps.width = p.width;
    }
    if (p.css === undefined) { p.css = {}; }
    p.css.padding = this.props.padding;
    return (
      <Block {...p} ref={(init) => { this.shell = init; }} >
        {processChildren(passProps)}
        <div className="clear" />
      </Block>
    );
  }
}

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  padding: PropTypes.string,
  gutter: PropTypes.string,
  numCols: PropTypes.string,
  equalize: PropTypes.bool,
  tabletCols: PropTypes.string,
};
Grid.defaultProps = {
  width: '996',
  equalize: false,
  gutter: '32',
};

export default Grid;
