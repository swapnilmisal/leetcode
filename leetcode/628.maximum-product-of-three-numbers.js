/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let min1 = 1001;
  let min2 = 1001;
  let max1 = -1001;
  let max2 = -1001;
  let max3 = -1001;

  nums.forEach((num) => {
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }
  });
  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
// @lc code=end
