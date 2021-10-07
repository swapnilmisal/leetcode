/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const double = new Map([
    ["CM", 900],
    ["CD", 400],
    ["XC", 90],
    ["XL", 40],
    ["IX", 9],
    ["IV", 4],
  ]);
  const single = new Map([
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1],
  ]);
  let output = 0;
  for (let index = 0; index < s.length; ) {
    const intrString = s.substring(index, index + 2);
    if (double.has(intrString)) {
      output += double.get(intrString);
      index += 2;
    } else {
      const singleStr = s[index];
      output += single.get(singleStr);
      index++;
    }
  }
  return output;
};
// @lc code=end
