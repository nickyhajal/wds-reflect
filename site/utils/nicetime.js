import _ from 'lodash';

const nicetime = (startVal, endVal = false, justVal = 60) => {
  let start = startVal;
  let end = endVal;
  let just = justVal;
  if (!_.isNumber(start)) {
    start = +start;
  }
  if (!end) {
    end = +(new Date());
  }
  const diff = (end - start) / 1000;
  if (diff < just) {
    return 'just now';
  } else if (diff < 60) {
    const outDiff = Math.floor(diff);
    return `${outDiff} ${(outDiff === 1 ? 'second' : 'seconds')} ago`;
  } else if (diff < 3600) {
    const outDiff = Math.floor(diff / 60);
    return `${outDiff} ${(outDiff === 1 ? 'minute' : 'minutes')} ago`;
  } else if (diff < 86400) {
    const outDiff = Math.floor(diff / 3600);
    return `${outDiff} ${(outDiff === 1 ? 'hour' : 'hours')} ago`;
  } else if (diff > 86400) {
    const outDiff = Math.floor(diff / 86400);
    return `${outDiff} ${(outDiff === 1 ? 'day' : 'days')} ago`;
  }
  return false;
};

export default nicetime;
