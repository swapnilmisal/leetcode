/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/guess-number-higher-or-lower/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let b = 1,
    e = n;
  while (true) {
    let num = b + ((e - b) >> 1);
    let output = guess(num);
    if (output === 0) return num;
    else if (output === 1) b = num + 1;
    else e = num - 1;
  }
};

module.exports = guessNumber;
