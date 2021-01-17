/*
 * @lc app=leetcode id=1043 lang=javascript
 *
 * [1043] Partition Array for Maximum Sum
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, l) {
  let memo = new Array(arr.length).fill(0);
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i, count = 1; j > i - l && j >= 0; j--, count++) {
      for (let k = count; k <= l && i - k >= -1; k++) {
        let tempSum = arr[j] * k + (memo[i - k] || 0);
        if (tempSum > maxSum) maxSum = tempSum;
      }
    }
    memo[i] = maxSum;
  }
  return maxSum;
};
// @lc code=end
