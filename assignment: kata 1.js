

const sumLargestNumbers = function(data) {
  // Put your solution here
  let number = 0
  for (let i = 0 ; i < data.length ; i++){
    for (let j = i + 1 ; j < data.length ; j++) {
      let compounded = data[i] + data[j]
        if (compounded > number) {
          number = compounded
      }
    }
  }
  return number
}


console.log(sumLargestNumbers([1, 15]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


