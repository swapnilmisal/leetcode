/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/happy-number/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = new Map();
  for (let sum = 0; sum !== 1; n = sum) {
    if (map.has(n)) return false;
    map.set(n, true);
    for (sum = 0; n; sum += (n % 10) ** 2, n = (n / 10) << 0);
  }
  return true;
};

module.exports = isHappy;

var test = require("./__test__/happy-number.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(isHappy);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
