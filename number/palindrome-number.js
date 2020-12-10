/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/palindrome-number/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const length = x.toString().length;
  if (Math.sign(x) === -1) return false;
  if (x < 10) return true;

  let remainingHalf = (length / 2) << 0;
  let multiplier = Math.pow(10, (length / 2) << 0);
  let mod = x % multiplier;
  const val = (length % 2 === 0 ? x / multiplier : x / (multiplier * 10)) << 0;
  let reverse = 0;
  while (remainingHalf > 0) {
    let modVal = mod % 10;
    reverse = reverse * 10 + modVal;
    mod = (mod / 10) << 0;
    remainingHalf--;
  }

  if (reverse === val) {
    return true;
  }

  return false;
};

module.exports = isPalindrome;
