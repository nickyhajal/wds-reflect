const colorize = (props) => {
  const map = {
    orange: 'FD7021',
    spice: 'rgba(174, 96, 0, 0.25)',
    gray: 'f2efed',
    bgry: 'E6E6E6',
    green: '39B54A',
    forest: '33571D',
    sea: '39B54A',
    blue: '0F54ED',
    white: 'FFFFFF',
    dark: '21170A',
    black: '000000',
    canvas: 'F4F4F4',
    brown: '5F3D13',

  };
  let p = '';
  if (typeof props === 'string') {
    p = props;
  } else {
    p = Object.assign({}, props);
  }
  Object.keys(map).forEach((color) => {
    let hex = map[color];
    const replace = (str) => {
      if (hex[0] !== 'r') {
        hex = `#${hex}`;
      }
      return str.replace(color, hex);
    };
    if (typeof props === 'string') {
      p = replace(p);
    } else {
      if (p.color !== undefined) p.color = replace(p.color);
      if (p.background !== undefined) p.background = replace(p.background);
      if (p.css !== undefined) {
        const css = JSON.stringify(p.css);
        p.css = JSON.parse(replace(css));
      }
    }
  });
  return p;
};

export default colorize;
