/*
 * @lc app=leetcode id=888 lang=javascript
 *
 * [888] Fair Candy Swap
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  //[1,2,5], [2,4]
  const sum = (a, b) => a + b;
  const Asum = A.reduce(sum); //8
  const Bsum = B.reduce(sum); //6
  const diff = Math.abs(Asum - Bsum); //2
  const isASmaller = Asum < Bsum;
  const [smaller, greater] = isASmaller ? [Asum, Bsum] : [Bsum, Asum]; //[Bsum, Asum]]
  const [smallerArray, greaterArray] = isASmaller ? [A, B] : [B, A]; // [B,A]
  const greaterSet = new Set(greaterArray); // set of A
  for (let i = 0; i < smallerArray.length; i++) {
    const smallDiff = smaller - smallerArray[i]; // 6 - 2 = 4 -- 6 - 4 = 2
    const greatDiff = greater + smallerArray[i]; // 8 + 2 = 10 -- 8 + 4 = 12
    const potentialNum = (greatDiff - smallDiff) / 2; // 10 - 4 = 6/2 = 3 == 12-2 = 10/2 = 5
    if (Number.isInteger(potentialNum))
      if (greaterSet.has(potentialNum)) {
        return Asum < Bsum
          ? [smallerArray[i], potentialNum]
          : [potentialNum, smallerArray[i]];
      }
  }
};
// @lc code=end
