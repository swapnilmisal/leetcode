/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  const result = [];
  const permuteRecurse = (loopIndex) => {
    if (loopIndex >= nums.length - 1) {
      result.push([...nums]);
      return;
    }
    for (let index = loopIndex; index < nums.length; index++) {
      swap(loopIndex, index);
      permuteRecurse(loopIndex + 1);
      swap(loopIndex, index);
    }
  };
  permuteRecurse(0);
  return result;
};
// @lc code=end
