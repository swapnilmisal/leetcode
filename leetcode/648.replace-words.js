/*
 * @lc app=leetcode id=648 lang=javascript
 *
 * [648] Replace Words
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const arr = sentence.split(" ");
  for (i = 0; i < arr.length; i++)
    for (const word of dictionary) if (arr[i].startsWith(word)) arr[i] = word;
  return arr.join(' ');
};
// @lc code=end
