/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    /*
    var array = []
    for (let i = 0; i < 10000; i++) {
        array.push(Math.floor(Math.random() * 1000))
    }
    console.log(JSON.stringify(array));
    */
    //
    const memo = [];
    memo.length = nums.length;
    memo.fill(Infinity);
    memo[nums.length-1] = 0;

    for (let i = nums.length-2; i >= 0; i--) {
        for (let j = 1; j <= nums[i] && j+i < nums.length; j++) {
            const value = memo[j+i] + 1;
            if(value < memo[i])
                memo[i] = value; 
        }
    }
    return memo[0];
};
// jump([1,2,3]);
// @lc code=end

