/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const combineRec = (count = 1, a = []) => {
    if (a.length === k) {
      res.push([...a]);
      return;
    }
    for (let i = count; i <= n; i++) {
      a.push(i);
      combineRec(i + 1, a);
      a.pop();
    }
  };
  combineRec();
  return res;
};
// @lc code=end
