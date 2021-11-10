function lastIndexOf (array, n) {
  var gotcha = false;
  var result = 0;
  for (var i = array.length-1 ; i >= 0 ; i-- ) {
    if (array[i] === n) {
      result = i;
      gotcha = true;
      break;
    }
  }
  if (gotcha) {
    return result;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([4,3134314,1,3,1,2,5,6,7,34,20,2,1], 9,2))