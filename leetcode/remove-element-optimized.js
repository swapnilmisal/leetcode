/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/remove-element/ LeetCode}.
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number[]} nums
 * @param {number} val
 * @return {number} length of the array
 */
var removeElement = function (nums, val) {
  let lastIndex = 0;
  let count = 0;
  let length = nums.length;
  for (let index = 0; index < length; index++) {
    if (nums[index] !== val) {
      if (count) {
        //swap
        const temp = nums[index];
        nums[index] = nums[lastIndex];
        nums[lastIndex] = temp;
        lastIndex++;
      }
      if (count === 0) lastIndex++;
    } else {
      count++;
    }
  }
  return length - count;
};
