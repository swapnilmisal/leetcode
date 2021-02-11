/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sp = 0;
  let tp = 0;
  while (sp < s.length && tp < t.length) {
    if (s[sp] === t[tp]) sp++;
    tp++;
  }
  return sp === s.length;
};
// @lc code=end
