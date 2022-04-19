/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const memo = new Array(amount + 1).fill(0);
    memo[0] = 1;

    coins.forEach((denomination) => {
        for (let i = 1; i <= amount; i++)
            if (memo[i - denomination] !== undefined)
                memo[i] = memo[i] + memo[i - denomination];
    });
    return memo[amount];
};

import { getRandom, getDistinctRandomArray } from "../utils/testGenerator.mjs";
console.log(getRandom(0, 5000));
console.log(JSON.stringify(getDistinctRandomArray(1, 5000, 300)));