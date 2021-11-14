const urlEncode = function(text) {
  // Put your solution here
  let percentTwenty = "%20"
  
  let newText = text.trim(" ");
  
  let newSentence = ""

  for (let i = 0 ; i < newText.length ; i++){
    newSentence = text.split(" ").join(percentTwenty)
  }
  if (newSentence.startsWith("%20") && newSentence.endsWith("%20") === true ){
    return newSentence.slice(3, -3) 
  } else if (newSentence.startsWith("%20")) {
    return newSentence.slice(3)
  } else if (newSentence.endsWith("%20")){ 
    return newSentence.slice(-0, -3)
  }
  return newSentence
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode(" May The Force Be With You"))
console.log(urlEncode("Just keep swimming. Just keep swimming. Just keep swimming. Just keep swimming, swimming, swimming, what do we do? We swim, swim, swim "))