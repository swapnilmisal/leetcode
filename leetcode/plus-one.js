/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/plus-one/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    } else {
      digits[i] += 1;
      return digits;
    }
  }
};

var test = require("./__test__/plus-one.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(plusOne);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
