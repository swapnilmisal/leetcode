/*
 * @lc app=leetcode id=1365 lang=javascript
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const orderedMap = new Map();
  const sortedNums = [...nums].sort((a, b) => a - b);
  nums.forEach((element) => orderedMap.set(element, 0));
  const size = nums.length - 1;
  for (let i = size, j = size; i >= 0; i = j) {
    while (sortedNums[j - 1] === sortedNums[i]) j--;
    orderedMap.set(sortedNums[i], j);
    j--;
  }
  return nums.map((element) => orderedMap.get(element));
};
// @lc code=end
