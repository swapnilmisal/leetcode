/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const countMap = new Array(3).fill(0);
  nums.forEach((num) => countMap[num]++);
  for (let index = 0, writeIndex = 0; index < 3; index++)
    for (let i = 0; i < countMap[index]; i++) nums[writeIndex++] = index;
};
// @lc code=end
