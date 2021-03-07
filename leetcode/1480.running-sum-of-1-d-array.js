/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  return nums.reduce((acc, curr, index) => {
    acc[index] = curr + (acc[index - 1] ?? 0);
    return acc;
  }, []);
};
// @lc code=end
