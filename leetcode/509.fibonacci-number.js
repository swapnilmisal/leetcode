/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  fib.array[n] = fib(n - 1) + fib(n - 2);
  return fib.array[n];
};
fib.array = [];
// @lc code=end
