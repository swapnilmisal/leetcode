/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let k = m + n - 1;
  let i = m - 1;
  let j = n - 1;
  while (k > -1) {
    if (i > -1 && j > -1)
      nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    else if (i > -1) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }
};
// @lc code=end
