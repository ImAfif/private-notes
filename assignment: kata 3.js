const numberOfVowels = function(data) {
  // Put your solution here
  let count = 0
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  for (let i = 0; i < data.length; i ++){
    if(vowels.includes(data[i])) {
      count += 1
    }
  } return count 
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
