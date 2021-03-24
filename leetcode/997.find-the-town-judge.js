/*
 * @lc app=leetcode id=997 lang=javascript
 *
 * [997] Find the Town Judge
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  const set = new Set();
  const map = new Map();
  trust.forEach((element) => {
    if (element[0]) set.add(element[0]);
    if (map.has(element[0])) map.delete(element[0]);
    if (element[1] && !set.has(element[1]))
      if (map.has(element[1])) map.set(element[1], map.get(element[1]) + 1);
      else map.set(element[1], 1);
  });
  if (N === 1 && set.size === 0 && map.size === 0) return 1;
  if (set.size === N - 1 && map.size === 1) {
    const output = map.entries().next().value;
    if (output[1] >= N - 1) return output[0];
  }
  return -1;
};

findJudge(1, [[]]);
// @lc code=end
