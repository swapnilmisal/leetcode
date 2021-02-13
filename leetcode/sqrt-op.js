/**
 * Checkout the LeetCode problem description
 * Binary search log(n) solution
 * {@link https://leetcode.com/problems/sqrtx/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  if (x < 2) return 1;
  let b = 0;
  let e = x;
  do {
    let current = (e + b) >> 1;
    let exp = current ** 2;
    if (exp === x) {
      return current;
    } else if (exp > x) {
      e = current;
    } else {
      b = current;
    }
  } while (e - b > 1);
  return b;
};

module.exports = mySqrt;

var test = require("./__test__/sqrt.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(mySqrt);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
