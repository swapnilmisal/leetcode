/*
 * @lc app=leetcode id=891 lang=javascript
 *
 * [891] Sum of Subsequence Widths
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function (nums) {
  const modulo = 1000000007;
  const sorted = nums.sort((a, b) => a - b);
  const rExpArray = [0];
  for (let i = 1; i < nums.length; i++) {
    const temp = (2*rExpArray[i-1]-1) % modulo;
    rExpArray.push(temp)
  }

  var sum = 0;
  for ( let i = 0, j = sorted.length - 1; i < sorted.length; ++i, --j) {
    const temp = ((rExpArray[j] * sorted[i]) % modulo) - ((rExpArray[i] * sorted[i]) % modulo);
    sum = (sum + temp) % modulo;
  }
  return sum;
};
// @lc code=end
