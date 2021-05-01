/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let indexed = [];
  const getMaxIndex = (i) => {
    let max = indexed[i];
    let x = i;
    for (let j = i + 1; j < indexed.length; j++) {
      if (indexed[j] >= max) {
        max = indexed[j];
        x = j;
      }
    }
    return x;
  };

  while (num) {
    indexed.push(num % 10);
    num = Math.floor(num / 10);
  }
  indexed = indexed.reverse();

  for (let i = 0, flag = true; i < indexed.length && flag; i++) {
    const pivot = indexed[i];
    for (let j = i + 1; j < indexed.length; j++) {
      const comparator = indexed[j];
      if (pivot < comparator) {
        const x = getMaxIndex(j);
        const temp = indexed[i];
        indexed[i] = indexed[x];
        indexed[x] = temp;
        flag = false;
        break;
      }
    }
  }

  return indexed.reduce((acc, curr) => acc * 10 + curr, 0);
};
// @lc code=end
