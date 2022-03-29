/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    const memo = Array.from(Array(k+1), _ => Array(prices.length+1).fill(0));

    for (let i = 1; i <= k; i++) {
        for (let j = prices.length - 1; j >= 0; j--) {
            let max = memo[i][j+1]
            for (let l = j + 1; l < prices.length; l++) {
                const profit = prices[l] - prices[j] + memo[i - 1][l + 1]
                if (max < profit)
                    max = profit
            }
            memo[i][j] = max;
        }
    }
    return memo[k][0];
};

import { getRandom, getRandomArray } from "../utils/testGenerator.mjs";
console.log(getRandom(0, 100));
console.log(JSON.stringify(getRandomArray(0, 1000, 1000)));