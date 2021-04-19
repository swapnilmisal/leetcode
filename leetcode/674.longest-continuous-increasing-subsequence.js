/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  const length = nums.length;
  let l = 0,
    r = 1;
  let max = length ? 1 : 0;
  while (r <= length) {
    if (nums[r] === undefined || nums[r] <= nums[r - 1]) {
      if (r - l > max) max = r - l;
      l = r;
    }
    r++;
  }
  return max;
};
// @lc code=end
