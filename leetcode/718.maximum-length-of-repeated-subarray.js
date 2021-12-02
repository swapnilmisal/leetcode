/*
 * @lc app=leetcode id=718 lang=javascript
 *
 * [718] Maximum Length of Repeated Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
 const memo = Array.from(Array(nums1.length+1), () => Array(nums2.length+1).fill(0))
 let length = 0;

 for (let i = 0; i < nums1.length; i++) {
     for (let j = 0; j < nums2.length; j++) {
        if(nums2[j] === nums1[i]) {
            memo[i+1][j+1] = memo[i][j]+1;
            if(length < memo[i][j]+1) length = memo[i][j] + 1;
        }
     }
 }
 return length;
};
// @lc code=end

