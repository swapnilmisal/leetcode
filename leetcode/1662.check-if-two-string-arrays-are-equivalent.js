/*
 * @lc app=leetcode id=1662 lang=javascript
 *
 * [1662] Check If Two String Arrays are Equivalent
 */

// @lc code=start
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};
// @lc code=end
