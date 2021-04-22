/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const memo = new Array(nums.length).fill(1);
  for (let j = 0; j < nums.length; j++)
    for (let i = j + 1; i < nums.length; i++)
      if (nums[i] > nums[j]) memo[i] = Math.max(memo[j] + 1, memo[i]);
  return Math.max(...memo);
};
// @lc code=end
