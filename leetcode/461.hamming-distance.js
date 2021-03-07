/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let z = x ^ y;
  let count = 0;
  while (z) {
    if (z % 2) count++;
    z = ~~(z / 2);
  }
  return count;
};
// @lc code=end
