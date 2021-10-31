/*
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  for (let i = 1; i < 4; i++)
    for (let j = i; j < nums.length; j++)
      if (nums[j] === nums[j - i]) return nums[j];
};
// @lc code=end
