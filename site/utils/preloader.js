const loaded = [];

export default function preloader(v) {
  if (loaded.indexOf(v) === -1) {
    let src = v;
    if (src.indexOf('http') < 0) {
      src = `https://files.wds.fm/images/${src}`;
    }
    const img = new Image();
    img.src = src;
    loaded.push(v);
  }
}
