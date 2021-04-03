/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const wordBreakRec = (i) => {
    for (let j = i + 1; j <= s.length; j++) {
      if (wordSet.has(s.slice(i, j))) {
        if (s.length === j) return true;
        else return wordBreakRec(j);
      }
    }
    return false;
  };
  return wordBreakRec(0);
};
// @lc code=end
