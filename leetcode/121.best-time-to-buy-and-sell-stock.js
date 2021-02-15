/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = -Infinity,
    profit = 0;
  for (let index = prices.length - 1; index >= 0; index--) {
    const element = prices[index];
    if (element > max) max = element;
    if (max - element > profit) profit = max - element;
  }
  return profit;
};
// @lc code=end
