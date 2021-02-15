/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  const memo = new Map();
  const recurse = (amount) => {
    if (memo.has(amount)) return memo.get(amount);
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    const minNoOfCoins = coins.reduce((acc, coin) => {
      const noOfCoins = recurse(amount - coin);
      if (noOfCoins === -1) return acc;
      else if (acc === -2) return noOfCoins;
      return acc < noOfCoins ? acc : noOfCoins;
    }, -2);
    memo.set(amount, minNoOfCoins + 1);
    return minNoOfCoins + 1;
  };
  return recurse(amount);
};
// @lc code=end
