import $ from 'jquery';
import is from './is';

const angles = [];
const map = {
  imageBlock: '0 0, 1 0, 1 0.96, 0 1',
  rl_header: '0 0, 1 0, 1 0.90, 0 1',
  lr_header: '0 0, 1 0, 1 1, 0 0.9',
  top_lr_1__6: '0 0, 1 0.021, 1 1, 0 1',
  top_lr_2__6: '0 0, 1 0.048, 1 1, 0 1',
  captionBlock: '0 0, 1 0.02, 1 1, 0 1',
};

const slugify = polygon => (
  ((polygon.indexOf('p-') === 0) ?
  polygon :
  `p-${polygon.replace(/,/g, '_').replace(/\s/g, '_').replace(/\./g, '___')}`)
);
const addPolygon = (polygon) => {
  const shell = $('#polygons');
  const id = slugify(polygon);
  shell.append(`
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0">
      <clipPath id="${id}" clipPathUnits="objectBoundingBox">
        <polygon points="${polygon}" />
      </clipPath>
    </svg>
  `);
  angles.push(polygon);
};
const convert = (p) => {
  if (
    p && (
      p.indexOf('tr') > -1 || p.indexOf('tl') > -1 || p.indexOf('br') > -1 || p.indexOf('bl') > -1
    )
  ) {
    const points = {
      tl: [0, 0],
      tr: [1, 0],
      br: [1, 1],
      bl: [0, 1],
    };
    const bits = p.split(';');
    bits.forEach((v) => {
      if (v && v.length) {
        const [point, vals] = v.split(':');
        let [x, y] = vals.split(',');
        const xDir = x.indexOf('-') > -1 ? -1 : 1;
        const yDir = y.indexOf('-') > -1 ? -1 : 1;
        x = points[point][0] + ((xDir * parseInt(x.replace(/%|\+|-/g, ''), 10)) / 100);
        y = points[point][1] + ((yDir * parseInt(y.replace(/%|\+|-/g, ''), 10)) / 100);
        points[point] = [x, y];
      }
    });
    const { tl, tr, br, bl } = points;
    return `${tl[0]} ${tl[1]}, ${tr[0]} ${tr[1]}, ${br[0]} ${br[1]}, ${bl[0]} ${bl[1]}`;
  }
  return p;
};

const angler = (polygon) => {
  let poly = is.safari() ? convert('0,0') : convert(polygon);
  let p = convert(polygon);
  if (poly.indexOf(' ') < 0) {
    poly = poly.replace(/\./g, '__');
    p = map[poly] !== undefined ? map[poly] : false;
  }
  if (p) {
    const slug = slugify(p);
    if (angles.indexOf(p) < 0) {
      addPolygon(p);
    }
    return `url("#${slug}")`;
  }
  return '';
};

// On load we need to add any polygons that had been created
// before the dom was ready
$(() => {
  setTimeout(() => {
    angles.forEach((v) => {
      addPolygon(v);
    });
  }, 100);
});

export default angler;
