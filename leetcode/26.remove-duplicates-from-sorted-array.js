/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const swap = (j, k) => {
    const temp = nums[j];
    nums[j] = nums[k];
    nums[k] = temp;
  };

  for (var i = 0, j = i + 1, k = j; k < nums.length; k++) {
    console.log(i,j,k)
    if (nums[i] !== nums[k]) {
      swap(j, k);
      j++;
      i++;
    }
  }
  return j;
};
// @lc code=end
