/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/maximum-subarray/ LeetCode}.
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  return Math.max(
    // left half
    maxSubArray(nums.slice(0, ~~(nums.length / 2))),
    // right half
    maxSubArray(nums.slice(~~(nums.length / 2))),
    crossoverSum(nums)
  );
};

var crossoverSum = (nums) => {
  let leftSum = Number.NEGATIVE_INFINITY,
    rightSum = Number.NEGATIVE_INFINITY;
  for (let i = ~~(nums.length / 2), sum = 0; i >= 0; i--) {
    sum += nums[i];
    if (sum > leftSum) leftSum = sum;
  }
  for (let i = ~~(nums.length / 2) + 1, sum = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > rightSum) rightSum = sum;
  }
  return Math.max(leftSum + rightSum, leftSum, rightSum);
};

var test = require("./__test__/maximum-subarray.test");
console.log("testing Maximum SubArray Divide and conquer");
console.time("start");
test(maxSubArray);
console.timeEnd("start");
console.log("passed test for testing Maximum SubArray Divide and conquer");
