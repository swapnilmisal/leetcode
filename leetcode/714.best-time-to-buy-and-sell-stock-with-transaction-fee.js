/*
 * @lc app=leetcode id=714 lang=javascript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    const memo = Array.from(Array(prices.length + 2), () => Array(prices.length + 2).fill(0));

    let ans = 0;
    for (let i = 2; i < prices.length + 2; i++) {
        for (let j = i + 1; j < prices.length + 2; j++) {
            let substruct = memo[i - 2][i - 1] + (prices[j - 2] - prices[i - 2] - fee);
            let top = memo[i - 1][j];
            let left = memo[i][j - 1]
            memo[i][j] = Math.max(substruct, top, left)
            ans = Math.max(ans, memo[i][j])
        }

    }
    return ans;
};
// @lc code=end

 const getRand = (limit) => {
     return Math.floor(Math.random() * limit) + 1;
 }



 const generate = () => {

    let limit = 8;
    let len = getRand(limit);
    let fee = getRand(3);
     const array = new Array(len);
     for (let i = 0; i < len; i++) {
         array[i] = getRand(limit);
     }
    console.log(JSON.stringify(array));
    console.log(JSON.stringify(fee));
     return [array, fee];
 }

 for (let i = 0; i < 10000; i++) {
     console.log(maxProfit(...generate()));
 }