const is = {
  mobile() {
    const width = window.screen.width;
    console.info(width);
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
};

export default is;
