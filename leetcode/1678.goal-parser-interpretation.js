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
  let str = "";
  let i = 0;
  while (i < command.length) {
    if (command[i] === "G") {
      str = str.concat("G");
      i++;
    } else if (i + 1 < command.length && command[i + 1] === ")") {
      str = str.concat("o");
      i += 2;
    } else if (i + 3 < command.length) {
      str = str.concat("al");
      i += 4;
    }
  }
  return str;
  /* 
  const mapObj = {
    "()": "o",
    o: "al",
    "(al)": "al",
  };
  const re = new RegExp(/\(\)|\(al\)|o/gi);
  return command.replace(re, (matched) => mapObj[matched]);
 */
};
// @lc code=end
