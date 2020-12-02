/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/maximum-subarray/ LeetCode}.
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currMax = nums[0],
    maxSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currMax);
  }
  return maxSoFar;
};

var test = require("./__test__/maximum-subarray.test");
console.log("testing Maximum SubArray");
console.time("start");
test(maxSubArray);
console.timeEnd("start");
console.log("passed test for testing Maximum SubArray");
