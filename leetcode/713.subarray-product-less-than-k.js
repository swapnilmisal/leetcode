/*
 * @lc app=leetcode id=713 lang=javascript
 *
 * [713] Subarray Product Less Than K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  for (var j = 0, i = 0, count = 0, product = 1; j < nums.length; j++) {
    product *= nums[j];
    while (k <= product && i <= j) {
      product /= nums[i];
      i++;
    }
    count += j - i + 1;
  }
  return count;
};
// @lc code=end
