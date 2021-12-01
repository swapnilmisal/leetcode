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
//    single line solution
//    return Math.min(...cost.reduce((acc, current) => [acc[1], Math.min((current+acc[0]), (current+acc[1]))] ,[0,0]));
};
// @lc code=end

