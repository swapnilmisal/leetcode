/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phone = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const output = [];
  const backtracking = (combination, digits) => {
    if (digits.length === 0) output.push(combination);
    else
      for (const char of phone[digits[0]])
        backtracking(combination + char, digits.slice(1));
  };

  if (digits.length) backtracking("", digits);

  return output;

  /* Iterative solution
  const obj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let res = [];
  const digitsArr = digits.split("");
  for (const element of digitsArr) {
    const tempRes = [];
    for (const char of obj[element]) {
      if (!res.length) {
        res = [...obj[element]];
        break;
      }
      for (const resChar of res) {
        tempRes.push(resChar.concat(char));
      }
    }
    if (tempRes.length) res = [...tempRes];
  }
  return res;
  */
};
// @lc code=end
