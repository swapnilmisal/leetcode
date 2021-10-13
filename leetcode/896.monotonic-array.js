/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let isMonoToneInc = true;
  let isMonotoneDec = true;

  for (let i = 1; i < nums.length; i++) {
    if (isMonoToneInc && nums[i - 1] > nums[i]) isMonoToneInc = false;
    if (isMonotoneDec && nums[i - 1] < nums[i]) isMonotoneDec = false;
  }
  return isMonoToneInc || isMonotoneDec;
};
// @lc code=end
