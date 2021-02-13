/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/climbing-stairs/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (climbStairs._map.has(n)) return climbStairs._map.get(n);
  if (n === 0) return 1;
  else if (n < 0) return 0;
  climbStairs._map.set(n, climbStairs(n - 1) + climbStairs(n - 2));
  return climbStairs._map.get(n);
};

climbStairs._map = new Map();

var test = require("./__test__/climbing-stairs.test");
var path = require("path");
console.log(`testing ${path.basename(__filename)}`);
console.time("start");
test(climbStairs);
console.timeEnd("start");
console.log(`passed test for ${path.basename(__filename)}`);
