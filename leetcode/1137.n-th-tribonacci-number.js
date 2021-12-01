/*
 * @lc app=leetcode id=1137 lang=javascript
 *
 * [1137] N-th Tribonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if( n === 0) return 0;
    if( n < 3) return 1;

    let memo = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        const sum = memo.reduce((acc, curr) => acc+curr);
        memo.shift();
        memo = [...memo, sum];
    }

    return memo[2];
};
// @lc code=end

