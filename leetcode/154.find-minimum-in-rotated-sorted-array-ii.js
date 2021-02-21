/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const binSearch = (b, e) => {
    if (nums[e] > nums[b]) return binSearch(Math.abs(2 * b - e), b);
    if (e - b <= 1) return nums[e];
    if (nums[e] === nums[b] && nums[b] === nums[Math.floor((b + e) / 2)]) {
      let left = binSearch(b, Math.floor((b + e) / 2));
      let right = binSearch(Math.floor((b + e) / 2), e);
      return left > right ? right : left;
    }
    if (nums[Math.floor((b + e) / 2)] === nums[e]) {
      let left = binSearch(b, Math.floor((b + e) / 2));
      let right = binSearch(Math.floor((b + e) / 2), e);
      return left > right ? right : left;
    } else return binSearch(Math.floor((b + e) / 2), e);
  };
  return binSearch(0, nums.length - 1);
};
// @lc code=end
