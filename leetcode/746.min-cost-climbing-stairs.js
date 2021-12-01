/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
   let a = 0;
   let b = 0;

   cost.forEach(current => {
      const c = Math.min((current+a), (current+b));
      a = b;
      b = c;
   });

   return Math.min(a,b);
};
// @lc code=end

