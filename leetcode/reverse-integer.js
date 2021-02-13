/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/reverse-integer/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x > -10 && x < 10) return x;
  const isSigned = x < 0;
  let integer = x;
  if (isSigned) integer = -integer;
  let reverse = integer % 10;
  integer = (integer / 10) << 0;
  while (integer > 0) {
    let mod = integer % 10;
    reverse = reverse * 10 + mod;
    integer = (integer / 10) << 0;
  }
  reverse = isSigned ? -reverse : reverse;
  if (reverse < -(2 ** 31) || reverse > 2 ** 31 - 1) reverse = 0;
  return reverse;
};

module.exports = reverse;

var test = require("./__test__/reverse-integer.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(reverse);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
