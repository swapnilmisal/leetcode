/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/two-sum/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @return {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

var test = require("./__test__/two-sum.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(twoSum);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
