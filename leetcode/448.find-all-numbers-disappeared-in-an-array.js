/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  for (let index = 0; index < nums.length; )
    if (nums[index] !== index + 1 && nums[index] !== nums[nums[index] - 1])
      swap(index, nums[index] - 1);
    else index++;

  return nums.reduce((acc, curr, index) => {
    if (curr !== index + 1) acc.push(index + 1);
    return acc;
  }, []);
};
// @lc code=end
