
exports.min = function min (arr) {
  if (!arr || !arr.length) return 0;
  arr.sort( ((a,b) => {return a-b}))
  return arr[0];
}

exports.max = function max (arr) {
  if (!arr || !arr.length) return 0;
  arr.sort( ((a,b) => {return a-b}))
  return arr[arr.length-1];
}

exports.avg = function avg (arr) {
  if (!arr || !arr.length) return 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result/arr.length;
}
