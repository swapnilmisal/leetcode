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
var maxSumAfterPartitioning = function (arr, k) {
  let memo = new Array(arr.length).fill(0);
  let maxSum = 0;
  for (let index = 0; index < arr.length; index++) {
    for (let outerIndex = 0; outerIndex < k; outerIndex++) {
      let elementIndex = index - outerIndex;
      for (let innerIndex = k - outerIndex; innerIndex > 0; innerIndex--) {
        let logicIndex = k - innerIndex + 1;
        if (elementIndex - logicIndex < -1) {
          break;
        }
        let tempSum =
          arr[elementIndex] * logicIndex +
          (memo[elementIndex - logicIndex] || 0);
        if (tempSum > maxSum) maxSum = tempSum;
      }
    }
    memo[index] = maxSum;
  }
  console.log(memo);

  return maxSum;
};
// @lc code=end

console.log(maxSumAfterPartitioning([1,15,7], 3));
