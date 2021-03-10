/*
 * @lc app=leetcode id=1470 lang=javascript
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const array = new Array();
  let i = 0,
    j = n;
  while (i < n && j < 2 * n) array.push(nums[i++], nums[j++]);
  return array;
};
// @lc code=end
