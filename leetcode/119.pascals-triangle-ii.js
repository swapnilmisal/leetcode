/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const fact = new Array(rowIndex + 1).fill(0);
  const res = [];

  const factorial = (x) => {
    if (x === 0) return 1;
    if (fact[x]) return fact[x];
    fact[x] = x * factorial(x - 1);
    return fact[x];
  };

  for (let i = 0; i <= rowIndex; i++)
    res.push(factorial(rowIndex) / (factorial(i) * factorial(rowIndex - i)));
  return res;
};
// @lc code=end
