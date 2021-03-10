/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max(
    ...accounts.reduce((acc, curr) => {
      acc.push(curr.reduce((acc, curr) => acc + curr, 0));
      return acc;
    }, [])
  );
};
// @lc code=end
