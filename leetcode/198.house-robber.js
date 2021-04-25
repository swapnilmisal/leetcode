/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  let prevMax = nums[0];
  let max = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const tempMax = max;
    max = Math.max(max, prevMax, nums[i] + prevMax);
    prevMax = tempMax;
  }
  return max;
};
// @lc code=end
