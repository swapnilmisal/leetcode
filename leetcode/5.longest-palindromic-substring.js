/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const length = s.length;
  const memo = Array.from(new Array(length), (_) => Array(length).fill(0));

  for (let i = 0; i < s.length; i++)
    for (let j = i; j < s.length; j++)
      if (s[j - i] === s[j]) memo[i][j] = memo[i - 2] ? memo[i - 2][j - 1] : 1;

  for (var k = s.length - 1; k >= 0; k--) {
    for (var l = s.length - 1; l >= k; l--) {
      if (memo[k][l]) break;
    }
    if (l >= k) break;
  }

  return s.substring(l - k, l + 1);
};
