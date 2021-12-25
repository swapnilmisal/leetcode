/*
 * @lc app=leetcode id=1770 lang=javascript
 *
 * [1770] Maximum Score from Performing Multiplication Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
 var maximumScore = function (nums, multipliers) {
    const n = nums.length;
    const m = multipliers.length;
     short = n - m;
    let temp = new Array(n);

    for (let i = m - 1, l = 0; i >= 0; i--, l++) {
        var curr = new Array(n);
        for (let j = short+l, k = 0; j < n; j++, k++) {
            curr[j] = Math.max((temp[j] || 0) + multipliers[i] * nums[k], (temp[j-1] || 0)+ multipliers[i] * nums[j])
        }
        temp = curr;
    }
    return curr[n - 1];

};
// @lc code=end

/**
 * Test Generator
 * for (let i = 0; i < 10; i++) {
    const m = getRandom(1, 10**3)
    const n = getRandom(m, 10**5)
    console.log(JSON.stringify(getRandomArray(-1000, 1000, n)));
    console.log(JSON.stringify(getRandomArray(-1000, 1000, m)));
}
 */