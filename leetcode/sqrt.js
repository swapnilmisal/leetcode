/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/sqrtx/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let i = 0;
  for (; i * i <= x; i++);
  return i - 1;
};

module.exports = mySqrt;

var test = require("./__test__/sqrt.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(mySqrt);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
