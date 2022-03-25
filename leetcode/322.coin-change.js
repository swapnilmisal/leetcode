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
//DFS memoisation
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

// DP-Tabulation
// Tabulate array of length amount.
// iterate from amount to 0 with memoisation and minimisation.
// return the result at 0;
// var coinChange = function (coins, amount) {

// }
//BFS
/*
var coinChange = function (coins, amount) {
  const map = new Map();
  const queue = [amount];
  map.set(amount, 0);

  while (queue.length) {
    const current = queue[0];
    const change = map.get(current) + 1;

    coins.forEach(coin => {
      const node = current - coin;
      if (node < 0) return;
      if (map.has(node)) {
        const nodeChage = map.get(node);
        if (change < nodeChage) {
          map.set(node, change);
          queue.push(node);
        }
      } else {
        map.set(node, change);
        queue.push(node);
      }
    })
    queue.shift();
  }
  if (map.has(0)) return map.get(0);
  return -1;
}
*/
// @lc code=end
