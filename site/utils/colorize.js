const colorize = (props) => {
  const map = {
    orange: 'CF7F1A',
    gray: 'f2efed',
    green: 'B1BC40',
    forest: '33571D',
    sea: '62C0CA',
    blue: '0373A5',
    white: 'FFFFFF',
    dark: '21170A',
    black: '000000',
    canvas: 'F1EEEC',
    brown: '5F3D13',

  };
  let p = '';
  if (typeof props === 'string') {
    p = props;
  } else {
    p = Object.assign({}, props);
  }
  Object.keys(map).forEach((color) => {
    const hex = map[color];
    const replace = (str) => {
      return str.replace(color, `#${hex}`);
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
