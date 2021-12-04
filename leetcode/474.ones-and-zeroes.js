/*
 * @lc app=leetcode id=474 lang=javascript
 *
 * [474] Ones and Zeroes
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    const getCount = (str) => {
        let ans = { len: 0, zeros: 0, ones: 0 };
        for (const char of str) {
            if (char === "0") ans.zeros++;
            else ans.ones++;
        }
        return ans;
    };

    const compare = (count, initial = { len: 0, zeros: 0, ones: 0 }) => {
        let temp = { ...initial };
        if (count.zeros + temp.zeros <= m && count.ones + temp.ones <= n) {
            temp.zeros += count.zeros;
            temp.ones += count.ones;
            temp.len += 1;
        }
        return temp;
    };

    const count = strs.map(getCount);
    // console.log(count);
    const memo = count.map((element) => compare(element));
    // console.log(memo);
    let output = 0;
    for (let i = 0; i < memo.length - 1; i++) {
        console.log(memo);
        for (let j = i + 1; j < memo.length; j++) {
            memo[j] = compare(count[i], memo[j]);
            if (output < memo[j].len) output = memo[j].len;
        }
    }
    // console.log(memo);
    // console.log(output)
    return output;
};

// console.log(findMaxForm(["10", "0", "1"], 1, 1));
// @lc code=end
