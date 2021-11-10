function range (start, end, step) {
  var num = [];
  
  if (start === undefined){
    return num = []
  } if (end === undefined){
    return num = []
  } if (step < 0){
    return num = []
  }

  for (var i = start; i <= end; i = i + step) {
    num.push (i)
  }
  return num;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
