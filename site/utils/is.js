const is = {
  phone() {
    const width = window.outerWidth;
    return width < 1006 && width > 690;
  },
  mobile() {
    const width = window.outerWidth;
    return width < 690;
  },
  desktop() {
    const width = window.outerWidth;
    return width > 1006;
  },
  tablet() {
    const width = window.outerWidth;
    return width < 1006 && width > 690;
  },
};

export default is;
