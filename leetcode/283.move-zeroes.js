/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // best solution
  for (let index = 0, lastNonZeroFound = 0; index < nums.length; index++) {
    if (nums[index]) {
      let temp = nums[lastNonZeroFound];
      nums[lastNonZeroFound++] = nums[index];
      nums[index] = temp;
    }
  }
  /* 
    // find zero found
  let b = -1;
  let e = 0;
  while (e < nums.length) {
    if (!nums[e]) {
      if (b < 0 || nums[b]) b = e;
    } else if (b >= 0) {
      nums[b++] = nums[e];
      nums[e] = 0;
    }
    e++;
  }
 */
  /*   let begin = null;
  for (let i = 0; i < nums.length; i++) {
    if (!nums[i]) {
      if (begin === null) begin = i;
    } else if (begin !== null) {
      for (
        let index = 0;
        index < i - begin && index + i < nums.length;
        index++
      ) {
        if (nums[i + index]) {
          nums[begin++] = nums[i + index];
          nums[i + index] = 0;
        }
      }
    }
   }*/
};
// @lc code=end
