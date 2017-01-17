const unitize = (num) => {
  let n = num;
  if (n !== undefined && n) {
    if (typeof n !== 'string') {
      n = n.toString();
    }
    if (
      n.indexOf('rem') < 0
      && n.indexOf('px') < 0
      && n.indexOf('em') < 0
      && n.indexOf('%') < 0
    ) {
      return `${n}px`;
    }
  }
  return n;
};
export default unitize;
