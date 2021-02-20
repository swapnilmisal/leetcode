/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let duplicateCount = 0;
  let past = Infinity;
  let r = nums.length;
  let replaceMode = false;
  nums.forEach((num, index) => {
    if (past !== num) {
      if (replaceMode) {
        nums[r] = num;
        r++;
      }
      duplicateCount = 0;
      past = num;
    } else {
      duplicateCount++;
      if (duplicateCount === 2) {
        if (!replaceMode) {
          r = index;
          replaceMode = true;
        }
      } else if (replaceMode && duplicateCount > 0 && duplicateCount < 2) {
        nums[r] = num;
        r++;
      }
    }
  });
  return r;
};
// @lc code=end
