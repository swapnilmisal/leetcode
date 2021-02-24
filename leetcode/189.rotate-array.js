/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let modk = k % nums.length;
  if (nums.length === 1 || !modk) return;
  const length = nums.length - 1;
  let m = length - modk,
    j = 0,
    i = m + 1;
  var swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  while (true) {
    swap(i, j);
    if (j === m && i === length) break;
    else if (j === m) m = i;
    else if (i === length) i = m;
    i++;
    j++;
  }

  return;
};
// @lc code=end
