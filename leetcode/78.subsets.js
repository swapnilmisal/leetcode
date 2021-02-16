/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  result.push([]);
  nums.forEach((num) => {
    const length = result.length;
    for (let index = 0; index < length; index++) {
      const element = result[index];
      const newElement = [...element, num];
      result.push(newElement);
    }
  });
  return result;
};
// @lc code=end
