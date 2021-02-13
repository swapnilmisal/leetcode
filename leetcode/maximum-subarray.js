/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/maximum-subarray/ LeetCode}.
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i] < nums[i] ? nums[i] : nums[i - 1] + nums[i];
    if (sum < nums[i]) sum = nums[i];
  }
  return sum;
};

var test = require("./__test__/maximum-subarray.test");
console.log("testing Maximum SubArray");
console.time("start");
test(maxSubArray);
console.timeEnd("start");
console.log("passed test for testing Maximum SubArray");
