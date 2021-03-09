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
  golden_ratio = (1 + 5 ** 0.5) / 2;
  return ~~((golden_ratio ** n + 1) / 5 ** 0.5);

  // if (n < 2) return n;
  // fib.array[n] = fib(n - 1) + fib(n - 2);
  // return fib.array[n];
};
fib.array = [];
// @lc code=end
