/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  // two pointer solution
  while (i < j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
  return s;

  /* 
  for (let index = 0; index < ~~(s.length / 2); index++) {
    const temp = s[index];
    s[index] = s[s.length - index - 1];
    s[s.length - index - 1] = temp;
  }
  return s;
*/
};
// @lc code=end
