/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
    const overlap = jobDifficulty.length - d;
    if (overlap < 0) return -1;

    const dp = new Array(d + 1).fill(0).map(() => new Array(jobDifficulty.length + 1).fill(0));

    let max = 0;
    for (let i = 0; i <= overlap; i++) {
        max = Math.max(max, jobDifficulty[i]);
        dp[1][i + 1] = max;
    }

    for (let i = 2; i <= d; i++) {
        for (let j = i; j <= i + overlap; j++) {
            let max = jobDifficulty[j - 1];
            let min = Infinity;
            for (let k = i, l = 1; k <= j; k++, l++) {
                max = Math.max(jobDifficulty[j - l], max);
                min = Math.min(dp[i - 1][j - l] + max, min);
            }
            dp[i][j] = min;
        }
    }
    return dp[d][jobDifficulty.length];
};

/**
import { getRandom, getRandomArray } from "../utils/testGenerator.mjs";
console.log(JSON.stringify(getRandomArray(0, 1000, 300)));
console.log(getRandom(1, 10));
write file using nodejs
*/