/*
 * @lc app=leetcode id=1313 lang=javascript
 *
 * [1313] Decompress Run-Length Encoded List
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i += 2)
    res.push(...Array(nums[i]).fill(nums[i + 1]));
  return res;
};
// @lc code=end
