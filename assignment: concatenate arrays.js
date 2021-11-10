
function concat (arrayOne, arrayTwo) {
  for (var i = 0; i < arrayTwo.length; i++) {
    arrayOne.push(arrayTwo[i]);
  }
  return arrayOne;
}






console.log(concat([0], [20, 10, 30]))
