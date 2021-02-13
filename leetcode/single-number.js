/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/single-number/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((acc, current) => acc ^ current);
};

module.exports = singleNumber;

var test = require("./__test__/single-number.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(singleNumber);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
