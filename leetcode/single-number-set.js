/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/single-number/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let set = new Set(nums);
  let setSum = [...set].reduce((acc, current) => acc + current, 0);
  let actualSum = nums.reduce((acc, current) => acc + current, 0);
  return 2 * setSum - actualSum; // set mutliplied by 2 to get sum considering every value appeard twice
};

module.exports = singleNumber;

var test = require("./__test__/single-number.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(singleNumber);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
