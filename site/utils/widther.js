import _ from 'lodash';
import is from './is';

const widther = (props) => {
  let boundWidth = '996px';
  if (is.tablet()) {
    boundWidth = '100%';
  }
  const colWidth = 125;
  const margin = 16;
  let width = '';
  const p = _.defaults(props, { width: false, cols: false, bound: true, bleed: true });
  if (p.cols) {
    width = p.cols * colWidth;
    if (!p.bleed) {
      width -= (margin * 2);
    }
    width += 'px';
  } else if (p.width) {
    width = `${p.width}`;
  } else if (p.bound) {
    width = boundWidth;
  } else {
    width = '100%';
  }
  return width;
};

export default widther;
