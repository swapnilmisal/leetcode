/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  // sorting can take nlogn space and nlogn time complexity so it's not very good approach
  // The preferable approach here could be to use linear sort and the space of the sorted array;
  const sortedNum = nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < sortedNum.length; i += 2) count += sortedNum[i];
  return count;
};
// @lc code=end
