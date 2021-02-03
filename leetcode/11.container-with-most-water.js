/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxSum = 0;
  let min = 0;
  let max = 0;
  let tempArea = 0;
  while (j - i > 0) {
    min = Math.min(height[i], height[j]);
    max = Math.max(height[i], height[j]);
    tempArea = min * (j - i);
    if (tempArea > maxSum) maxSum = tempArea;
    if (height[i] > height[j]) j--;
    else i++;
  }
  return maxSum;
};
// @lc code=end
