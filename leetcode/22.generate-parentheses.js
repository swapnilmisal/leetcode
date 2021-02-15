/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const results = [];
  const recurse = (currI, str = "", closedCount = 0) => {
    if (currI === 0) {
      const finalStr = str.concat(
        Array(n - currI - closedCount)
          .fill(")")
          .join("")
      );
      results.push(finalStr);
      return;;
    }
    for (let i = 0; i <= n - currI - closedCount; i++) {
      const nextString = str.concat(Array(i).fill(")").join("").concat("("));
      recurse(currI - 1, nextString, closedCount + i);
    }
  };

  recurse(n);
  return results
};
// @lc code=end
