/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/longest-common-prefix/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let string = strs[0];
  let i = 0;
  for (; i < string.length; i++)
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== string[i]) return string.slice(0, i);
    }
  return string.slice(0, i);
};

var test = require("./__test__/longest-common-prefix.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(longestCommonPrefix);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
