/*
 * @lc app=leetcode id=1025 lang=javascript
 *
 * [1025] Divisor Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
 var divisorGame = function(n) {
    const memo = [];
    memo[1] = false;
    for (let i = 2; i <= n; i++) {
        memo[i] = false;
        for (let j = Math.floor(i/2); j > 0; j--) {
            if(!(i%j) && !memo[i-j])
                memo[i] = true;
        }
   }
   return memo[n];
};
// @lc code=end