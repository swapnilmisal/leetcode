/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];
  let arr = [num + 1];
  arr[0] = 0;
  arr[1] = 1;
  for (i = 2; i <= num; i++) {
    const divider = Math.floor(Math.log2(i));
    const mod = i - 2 ** divider;
    arr[i] = 1 + arr[mod];
  }
  return arr;
};
// @lc code=end
