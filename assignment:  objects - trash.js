

const smartGarbage = function (trash, bins) {
  // Your code in here ...
  if (trash === 'waste'){
    bins.waste +=  1
  } else if (trash === 'recycling'){
    bins.recycling +=  1
  } else if (trash === 'compost'){
    bins.compost +=  1
  }
  console.log(bins)
  return bins 
  console.log(bins)
} 

