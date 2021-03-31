/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A.length !== B.length) return false;
  if (!A.length) return true;
  const preSuf = [0];

  for (let i = 1, j = 0; i < B.length; )
    if (B[i] === B[j]) preSuf.push(j + 1), j++, i++;
    else if (j - 1 >= 0) j = preSuf[j - 1];
    else preSuf.push(0), i++;
  let j = 0;
  const concatedString = A.concat(A);
  for (let i = 0; i < concatedString.length; ) {
    if (concatedString[i] === B[j]) j++, i++;
    else if (j - 1 >= 0) j = preSuf[j - 1];
    else i++;
    if (j >= B.length) return true;
  }

  return false;
};
// @lc code=end
