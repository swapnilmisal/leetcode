/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sumFunc = (acc, curr) => acc + curr;
  const sum = nums.reduce(sumFunc);
  for (let i = 0, prefixSum = 0; i < nums.length; prefixSum += nums[i++])
    if (prefixSum + nums[i] === sum - prefixSum) return i;
  return -1;
  // another approach
  //   const leftSum = nums.reduce((acc, curr, index) => {
  // acc.push(index ? acc[index - 1] + curr : curr);
  // return acc;
  //   }, []);
  //
  //   const rightSum = nums.reduceRight((acc, curr, index) => {
  // acc[index] = index === nums.length - 1 ? curr : curr + acc[index + 1];
  // return acc;
  //   }, []);
  //
  //   return leftSum.findIndex((curr, index) => curr === rightSum[index]);
};
// @lc code=end
