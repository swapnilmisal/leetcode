/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const getLowercaseString = (str) => {
    return str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  };
  const lcs = getLowercaseString(s);

  let i = 0;
  let = j = lcs.length - 1;
  let flag = true;
  while (i < j && flag) {
    if (lcs[i++] !== lcs[j--]) flag = false;
  }
  return flag;
};
// @lc code=end
