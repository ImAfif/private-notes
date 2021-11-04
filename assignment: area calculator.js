function calculateRectangleArea(length, width) {
  let answer = (length * width);
  if (answer <= 0){
    return undefined
  } else {
    return answer 
  }
}



function calculateTriangleArea(base, height) {
  let answer = (base * height / 2);
  if (answer <= 0){
    return undefined
  } else {
    return answer 
  }
}




function calculateCircleArea(radius) { 
  if (radius <= 0){
    return undefined
  }
  let answer = Math.PI * (radius * radius);
  if (answer <= 0){
    return undefined
  } else {
    return answer 
  }
}




console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // shouldreturn "undefined"

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // shouldreturn "undefined"

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // shouldreturn "undefined"