
exports.min = function min (arr) {
  if (arr?.length) {
     arr.sort( ((a,b) => {return a-b}))
    return arr[0];
  } else return 0;
}

exports.max = function max (arr) {
  if (arr?.length){
     arr.sort( ((a,b) => {return a-b}))
    return arr[arr.length-1];
  } else return 0;
}

exports.avg = function avg (arr) {
  if (arr?.length) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result/arr.length;
  } else return 0;
}
