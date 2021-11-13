const conditionalSum = function(values, condition) {
  var cond = 0
  if (condition === "even"){
    for (let i = 0; i < values.length; i++){
      if (values[i] % 2 === 0){
        cond = cond + values[i]
      } 
    } 
  } else if (condition === "odd") {
    for (let i = 0 ; i < values.length; i++) {
      if (values[i] % 2 === 1){
        cond = cond + values[i]
      } 
    }
    
  } else {
    cond.push("0")
  }
  return cond
}




console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "even"));