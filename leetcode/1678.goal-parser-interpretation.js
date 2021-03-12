/*
 * @lc app=leetcode id=1678 lang=javascript
 *
 * [1678] Goal Parser Interpretation
 */

// @lc code=start
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  const mapObj = {
    "()": "o",
    o: "al",
    "(al)": "al",
  };
  const re = new RegExp(/\(\)|\(al\)|o/gi);
  return command.replace(re, (matched) => mapObj[matched]);
};
// @lc code=end
