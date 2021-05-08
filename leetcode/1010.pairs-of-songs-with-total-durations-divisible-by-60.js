/*
 * @lc app=leetcode id=1010 lang=javascript
 *
 * [1010] Pairs of Songs With Total Durations Divisible by 60
 */

// @lc code=start
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  const map = new Map();
  let count = 0;

  const combinations = (n) => Math.floor((n * (n - 1)) / 2);
  const handleSpecialCase = (n) => {
    if (map.has(n)) {
      count += combinations(map.get(n));
      map.delete(n);
    }
  };

  time.forEach((duration) => {
    const mod = duration % 60;
    if (map.has(mod)) map.set(mod, map.get(mod) + 1);
    else map.set(mod, 1);
  });

  handleSpecialCase(0);
  handleSpecialCase(30);

  for (const [mod, val] of map) {
    count += val * (map.has(60 - mod) ? map.get(60 - mod) : 0);
    map.set(mod, 0);
    map.set(60 - mod, 0);
  }

  return count;
};
// @lc code=end
