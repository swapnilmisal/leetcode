/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/first-unique-character-in-a-string/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const prev = s.indexOf(s[i]);
    const next = s.indexOf(s[i], i + 1);
    if (prev === i && next === -1) return i;
  }
  return -1;
};

var test = require("./__test__/first-unique-char.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(firstUniqChar);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
