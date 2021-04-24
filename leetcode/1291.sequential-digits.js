/*
 * @lc app=leetcode id=1291 lang=javascript
 *
 * [1291] Sequential Digits
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const getNumberOfDigitsRequired = (number) =>
    Math.floor(Math.log10(number)) + 1;
  const truncateNumber = (number, digits) =>
    Math.floor(number / 10 ** (9 - digits));
  const getFirstNumber = (digits) => truncateNumber(123456789, digits);
  const getIncrementor = (digits) => truncateNumber(111111111, digits);

  const result = [];
  const lowDigits = getNumberOfDigitsRequired(low);
  const highDigits = getNumberOfDigitsRequired(high);

  for (let i = lowDigits; i <= highDigits; i++) {
    let number = getFirstNumber(i);
    let incrementor = getIncrementor(i);
    for (let j = i; j < 10; j++) {
      if (number >= low && number <= high) result.push(number);
      else if (number > high) break;
      number += incrementor;
    }
  }
  return result;
};
// @lc code=end
