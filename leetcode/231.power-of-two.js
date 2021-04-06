/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // if (n === 0) return false;
  if (n <= 0) return false; // can use either of the solution
  /*
  Javascript LogN solution
  return Number.isInteger(Math.log2(n));
  */
  /*
  // Manual LogN solution
  while (n % 2 === 0) n /= 2;
  return n === 1;
  */
  /*
  // doesnt fully work in javascript
  return (n & -n) === n;
 */
  /* */
  return (n & (n - 1)) === 0;
};
// @lc code=end
