/*
 * @lc app=leetcode id=873 lang=javascript
 *
 * [873] Length of Longest Fibonacci Subsequence
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  // came up with a brute force solution, implemented dynamic programming based soln learned for leetcode
  const N = arr.length;
  const index = new Map();
  arr.forEach((num, i) => (index[num] = i));
  const longest = new Map();

  let ans = 0;
  for (let k = 0; k < N; k++) {
    for (let j = 0; j < k; j++) {
      let i = index[arr[k] - arr[j]];
      if (i === undefined || i >= j) continue;
      if (longest[i * N + j] === undefined) longest[i * N + j] = 2;
      longest[j * N + k] = longest[i * N + j] + 1;
      ans = Math.max(ans, longest[j * N + k]);
    }
  }
  return ans;
};
// @lc code=end
