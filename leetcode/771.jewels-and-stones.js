/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const map = new Map();
  jewels.split("").forEach((element) => {
    if (!map.has(element)) map.set(element, 0);
  });

  let count = 0;
  stones.split("").forEach((element) => {
    if (map.has(element)) map.set(element, map.get(element) + 1);
  });
  for (const [key, val] of map) count += val;
  return count;
};
// @lc code=end
