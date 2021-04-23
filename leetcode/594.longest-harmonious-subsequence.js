/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const map = new Map();
  nums.forEach((num) => {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  });

  let max = 0;
  for (const [key, val] of map) {
    const lowerBound = map.has(key - 1) ? map.get(key - 1) : 0;
    const upperBound = map.has(key + 1) ? map.get(key + 1) : 0;
    max = Math.max(
      (lowerBound && val) + lowerBound,
      (upperBound && val) + upperBound,
      max
    );
  }
  return max;
};
// @lc code=end
