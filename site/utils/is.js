const is = {
  mobile() {
    const width = window.screen.width;
    return width < 1006;
  },
  phone() {
    const width = window.screen.width;
    return width < 690;
  },
  desktop() {
    const width = window.screen.width;
    return width > 1006;
  },
  tablet() {
    const width = window.screen.width;
    return width < 1006 && width > 690;
  },
  device() {
    if (is.phone()) {
      return 'phone';
    } else if (is.tablet()) {
      return 'tablet';
    } else if (is.desktop()) {
      return 'desktop';
    }
    return 'desktop';
  },
  set(prop, props) {
    // console.info(props, 'props');
    // console.info(prop, 'prop');
    if (props[is.device()] !== undefined && props[is.device()][prop] !== undefined) {
      return props[is.device()][prop];
    } else if (props.all !== undefined && props.all[prop] !== undefined) {
      return props.all[prop];
    }
    return false;
  },
};

export default is;
