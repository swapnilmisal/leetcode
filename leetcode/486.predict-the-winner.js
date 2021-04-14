/*
 * @lc app=leetcode id=486 lang=javascript
 *
 * [486] Predict the Winner
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  if (nums.length <= 2) return true;
  const memo = [];
  const recurse = (start, end) => {
    if (memo[start]?.[end] !== undefined) return memo[start][end];
    if (start === end) {
      if (memo?.[start] === undefined) {
        const k = [];
        k[end] = nums[end];
        memo[start] = k;
      }
      return memo?.[start]?.[end];
    } else {
      const forward = recurse(start, end - 1);
      const backward = recurse(start + 1, end);
      if (forward > backward) {
        memo[start][end] =
          nums[start] +
          Math.min(
            memo[start + 2]?.[end] ?? 0,
            memo[start + 1]?.[end - 1] ?? 0
          );
      } else if (forward < backward) {
        memo[start][end] =
          nums[end] +
          Math.min(
            memo[start]?.[end - 2] ?? 0,
            memo[start + 1]?.[end - 1] ?? 0
          );
      } else {
        if (start > end) {
          nums[start] +
            Math.min(
              memo[start + 2]?.[end] ?? 0,
              memo[start + 1]?.[end - 1] ?? 0
            );
        } else {
          memo[start][end] =
            nums[end] +
            Math.min(
              memo[start]?.[end - 2] ?? 0,
              memo[start + 1]?.[end - 1] ?? 0
            );
        }
      }
      return memo[start][end];
    }
  };
  const winnerScore = recurse(0, nums.length - 1);
  return (
    winnerScore >= Math.min(memo[0][nums.length - 2], memo[1][nums.length - 1])
  );
};
// @lc code=end
