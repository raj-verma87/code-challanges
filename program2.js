const SecondLargestWord = (str)=>{
    let words =  str.split(" ");
    // Remove duplicates and store words in a Set
  const uniqueWords = new Set(words);

  // Sort unique words by length in descending order
  const sortedWords = [...uniqueWords].sort((a, b) => b.length - a.length);

  // Check if there are at least two words
  if (sortedWords.length < 2) {
    return "There is no second largest word.";
  }

  // Return the second largest word
  return sortedWords[1];
}
console.log("Second Largest Word...",SecondLargestWord("I am a best best developer"));

//========================================================

// Map each digit to corresponding letters like on a phone keypad
const phoneMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  
  function generateCombinations(digits) {
    // Edge case: if no input is given, return an empty array
    if (!digits) return [];
  
    // Initialize with an empty combination
    let combinations = [''];
  
    // Iterate over each digit in the input
    for (const digit of digits) {
      if (!phoneMap[digit]) continue;  // Skip invalid digits like 1, 0
  
      const newCombinations = [];
  
      // Append each letter corresponding to the current digit to existing combinations
      for (const combination of combinations) {
        for (const letter of phoneMap[digit]) {
          newCombinations.push(combination + letter);
        }
      }
  
      combinations = newCombinations; // Update combinations with the new set
    }
  
    return combinations;
  }
  
  // Example inputs
  const input1 = "23";
  const input2 = "3";
  const input3 = "233";
  
  console.log(generateCombinations(input1));  // Output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
  console.log(generateCombinations(input2));  // Output: ['d', 'e', 'f']
  //console.log(generateCombinations(input3));  // Output: ['add', 'ade', 'adf', 'aed', 'aee', 'aef', 'afd', 'afe', 'aff', ...]
  