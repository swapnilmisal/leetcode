/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/longest-common-prefix/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // sub problems
  if (!strs.length) return "";
  if (strs.length === 1) return strs[0];

  // Divide
  let leftStr = longestCommonPrefix(strs.slice(0, strs.length / 2)); // Left sub problem
  let rightStr = longestCommonPrefix(strs.slice(strs.length / 2, strs.length)); // Right sub problem

  // Conquer
  for (let i = 0; i < leftStr.length; i++) {
    if (leftStr[i] !== rightStr[i]) return leftStr.slice(0, i);
  }
  return leftStr;
};

var test = require("./__test__/longest-common-prefix.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(longestCommonPrefix);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
