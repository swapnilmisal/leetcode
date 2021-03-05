/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0,
    j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] < target) i++;
    else if (numbers[i] + numbers[j] > target) j--;
    else return [i + 1, j + 1];
  }
};
// @lc code=end
