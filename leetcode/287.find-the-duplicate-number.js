/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let tortoise = nums[0];
  let hare = nums[0];
  while (true) {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
    if (hare === tortoise) break;
  }
  tortoise = nums[0];
  while (hare !== tortoise) { // To find if the loop is at the begining
    hare = nums[hare];
    tortoise = nums[tortoise];
  }
  return hare;
  /*
  const map = new Map();
  for (const num of nums)
    if (map.has(num)) return num;
    else map.set(num, true);
 */
};
// @lc code=end
