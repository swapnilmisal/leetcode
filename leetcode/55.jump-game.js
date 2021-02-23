/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let jr = 1;
  for (let index = nums.length - 2; index >= 0; index--) {
    if (nums[index] >= jr) jr = 1;
    else jr++;
  }
  return jr === 1 ? true : false;
};
// @lc code=end
