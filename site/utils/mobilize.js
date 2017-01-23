import _ from 'lodash';
import is from './is';


const m = (props, origCss) => {
  let css = '';
  if (props !== undefined) {
    const all = (props.all === undefined) ? {} : props.all;
    const tablet = (props.tablet === undefined) ? {} : props.tablet;
    if (is.phone()) {
      const phone = (props.phone === undefined) ? {} : props.phone;
      css = _.merge(origCss, all, tablet, phone);
    } else if (is.tablet()) {
      css = _.merge(origCss, all, tablet);
    }
  }
  return css;
};

export default m;
