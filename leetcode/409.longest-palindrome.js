/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const obj = {};
  let output = 0;
  let oddFlag = false;
  for (const char of s) {
    if (obj[char]) obj[char]++;
    else obj[char] = 1;
  }

  for (const value of Object.values(obj)) {
    if (value % 2) {
      oddFlag = true;
      output += value - 1;
    } else output += value;
  }

  return output + oddFlag;
};
// @lc code=end
