/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) return false;
  const openParens = "({[";
  const closeParensMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const openParensStack = [];

  for (const char of s) {
    if (openParens.includes(char)) openParensStack.push(char);
    else {
      const openBracket = openParensStack.pop();
      const correspondingClosingBracket = closeParensMap[openBracket];
      if (correspondingClosingBracket !== char) {
        return false;
      }
    }
  }
  if (openParensStack.length) return false;
  return true;
};
// @lc code=end
