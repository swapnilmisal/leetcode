/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const memo = Array.from(Array(s.length), () => Array(s.length).fill(0));
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length - i; j++) {
            const r = j;
            const c = j + i;
            const subproblemValue = memo[r + 1]?.[c - 1] ?? 1;
            if (s[r] === s[c] && (c - r < 2 || subproblemValue)) {
                memo[r][c] = 1;
                count++;
            }
        }
    }
    return count;
};
// @lc code=end

/*
test case generator
const generate = () => {
    const upLimit = 1000;
    const lowLimit = 1;
    const getRand = (upLimit, lowLimit = 0) => {
        let int = Math.floor(Math.random() * (upLimit - lowLimit))
        if (int < lowLimit)
            int += lowLimit;
        return int;
    }

    const getRandomString = () => {
        let randomString = "";
        let aCode = "a".charCodeAt(0);
        const limit = getRand(upLimit, lowLimit)
        for (let i = 0; i < limit; i++) {
            let x = getRand(25);
            randomString = randomString.concat(String.fromCharCode(x + aCode));
        }

        return randomString;
    }
    for (let i = 0; i < 100; i++) {
        console.log(JSON.stringify(getRandomString()));
    }
}
generate();
*/