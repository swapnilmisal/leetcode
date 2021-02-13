/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/length-of-last-word/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  const words = s.split(" ");
  for (i = words.length - 1; i >= 0; i--)
    if (words[i].length) return words[i].length;
  return 0;
};

var test = require("./__test__/length-of-last-word.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(lengthOfLastWord);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
