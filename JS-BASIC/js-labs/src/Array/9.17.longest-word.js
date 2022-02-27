// Bài tập mảng - Tìm từ dài nhất
function findLongestWordI(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;
  let longestWord = wordList[0];
  for (let i = 0; i < wordList.length; i++) {
    const currentWord = wordList[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}
function findLongestWordEach(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;
  let longestWord = wordList[0];
  wordList.forEach((currentWord) => {
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  });
  return longestWord;
}
function findLongestWordReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;
  return wordList.reduce((longestWord, currentWord) =>
    currentWord.length > longestWord.length ? currentWord : longestWord
  );
}
const wordList = ['easy', 'frontend'];
console.log(findLongestWordI(wordList));
console.log(findLongestWordEach(wordList));
console.log(findLongestWordReduce(wordList));
