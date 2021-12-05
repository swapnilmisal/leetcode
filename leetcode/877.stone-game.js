/*
 * @lc app=leetcode id=877 lang=javascript
 *
 * [877] Stone Game
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
    // 1st player will always win
    //return true;
    const memo = Array.from(Array(piles.length), () => Array(piles.length).fill(0))

    for (let i = 0; i < piles.length; i++) {
        for (let j = 0; j < piles.length - i; j++) {
            let r = j;
            let c = j + i
            memo[r][c] = Math.max(
                piles[r] + Math.min(memo[r + 2]?.[c] ?? 0, memo[r + 1]?.[c - 1] ?? 0),
                piles[c] + Math.min(memo[r]?.[c - 2] ?? 0, memo[r + 1]?.[c - 1] ?? 0)
            )
        }
    }
    return memo[0][piles.length - 1] >= Math.max(memo[0][piles.length - 2], memo[1][piles.length - 1]);
};
// @lc code=end


/*
const getRand = (limit) => {
    return Math.floor(Math.random() * limit) + 1;
}


let len = getRand(494);
len = len % 2 ? len + 1 : len;

const generate = () => {

    const piles = new Array(len);
    for (let i = 0; i < len; i++) {
        piles[i] = getRand(497);
    }
    let sum = piles.reduce((acc, curr) => acc + curr);
    if (!(sum % 2)) piles[0]++;
    sum = piles.reduce((acc, curr) => acc + curr);
    return piles;
    console.log(JSON.stringify(piles));

}

for (let i = 0; i < 10000000; i++) {
    console.log(stoneGame(generate()));
}
*/