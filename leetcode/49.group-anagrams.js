/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sortedStrings = strs.map((str) => str.split("").sort().join(""));
  const anagramMap = new Map();
  sortedStrings.forEach((str, index) => {
    const originalString = strs[index];
    if (anagramMap.has(str)) anagramMap.get(str).push(originalString);
    else anagramMap.set(str, [originalString]);
  });
  const result = [];
  for (const [key, value] of anagramMap) {
    result.push(value);
  }
  return result;
};
// @lc code=end
