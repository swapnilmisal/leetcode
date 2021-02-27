/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let index = 0; index < ~~(s.length / 2); index++) {
    const temp = s[index];
    s[index] = s[s.length - index - 1];
    s[s.length - index - 1] = temp;
  }
  return s;
};
// @lc code=end
