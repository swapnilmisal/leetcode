/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const simpleLength = nums.length;
  const sett = new Set(nums);
  const setLength = sett.size;
  return setLength !== simpleLength;
};
// @lc code=end
