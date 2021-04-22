/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/*
var lengthOfLIS = function (nums) {
  const memo = new Array(nums.length).fill(1);
  for (let j = 0; j < nums.length; j++)
    for (let i = j + 1; i < nums.length; i++)
      if (nums[i] > nums[j]) memo[i] = Math.max(memo[j] + 1, memo[i]);
  return Math.max(...memo);
};
*/
const binarySearch = function (array, b, e, num) {
  if (!array.length) return array.length;
  if (array[b] >= num) return -1;
  if (array[e] < num) return array.length;
  while (b <= e) {
    const m = Math.floor((b + e) / 2);
    if (num === array[m]) return m;
    if (num < array[m]) e = m - 1;
    if (num > array[m]) b = m + 1;
  }
  return b;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const memo = [];
  nums.forEach((num) => {
    const i = binarySearch(memo, 0, memo.length - 1, num);
    if (i < 0) memo[0] = num;
    else memo[i] = num;
  });
  return memo.length;
};
// @lc code=end
