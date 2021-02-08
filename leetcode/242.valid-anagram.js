/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (const char of s) {
    if (map.has(char)) {
      const count = map.get(char) + 1;
      map.set(char, count);
    } else map.set(char, 1);
  }
  for (const char of t) {
    if (map.has(char)) {
      let count = map.get(char) - 1;
      if (count) map.set(char, count);
      else map.delete(char);
    } else return false;
  }

  return true;
};
// @lc code=end
