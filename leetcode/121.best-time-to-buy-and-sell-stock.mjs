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
  /*
  let max = -Infinity,
  profit = 0;
  for (let index = prices.length - 1; index >= 0; index--) {
    const element = prices[index];
    if (element > max) max = element;
    if (max - element > profit) profit = max - element;
  }
  return profit;
    
  let output = 0;
  prices.reduce((min, current) => {
    output = Math.max(output, current - min);
    return Math.min(min, current);
  }, Number.POSITIVE_INFINITY)
  return output;
  */
  return prices.reduce(([min, output], current) => [Math.min(min, current), Math.max(output, current - min)], [Number.POSITIVE_INFINITY, 0])[1];
};
// @lc code=end

import { getRandomArray } from "../utils/testGenerator.mjs";
for (let index = 0; index < 10; index++) {
  console.log(JSON.stringify(getRandomArray(0, 10000, 100000)));

}
