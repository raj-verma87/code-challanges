const SecondLargestWord = (str) => {
  let words = str.split(" ");
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
console.log("Second Largest Word...", SecondLargestWord("I am a best best developer"));

const SecondLargestWordWithoutDuplicate = (str) => {
  let SecondLargestWordword = str.split(" ")
    .sort((a, b) => b.length - a.length)[1]

  return SecondLargestWordword;
}
console.log("Second Largest Word...", SecondLargestWordWithoutDuplicate("hello i am backend developer"));
