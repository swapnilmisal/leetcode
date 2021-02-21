/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

/**
 *
 * Algorithms
 * 1. Select the last element
 *    while()
 * 2. if(!(LastEl > FirstEl))
 * 3. then select the middle element
 * 4. if(!(LastEl > MidEl))
 * 5. then
 * 3.
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const binSearch = (b, e) => {
    if (nums[e] > nums[b]) return binSearch(2 * b - e, b);
    if (e - b <= 1) return nums[e];
    return binSearch(Math.ceil((b + e) / 2), e);
  };
  return binSearch(0, nums.length - 1);
};
// @lc code=end
