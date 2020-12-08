/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/first-unique-character-in-a-string/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) map.set(s[i], i);
    else map.set(s[i], -1);
  }
  let firstUniqueCharIndex = -1;
  for (const [key, value] of map) {
    if (value !== -1) return value;
  }
  return firstUniqueCharIndex;
};

var test = require("./__test__/first-unique-char.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(firstUniqChar);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
