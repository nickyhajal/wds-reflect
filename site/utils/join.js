export default function join(original, all, last = false) {
  let arr = original.slice();
  if (!last) {
    last = all;
  }
  const lastItem = arr.splice(-1); //strip out the last element
  arr = arr.length ? [arr.join(all)] : []; //make an array with the non-last elements joined with our 'all' string, or make an empty array
  arr.push(lastItem); //add last item back so we should have ["some string with first stuff split by 'all'", last item]; or we'll just have [lastItem] if there was only one item, or we'll have [] if there was nothing in the original array
  return arr.join(last); //now we join the array with 'last'
}
