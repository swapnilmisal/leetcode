/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
var recurse = function (nums, s, e) {
  if (e - s === 0) return [nums[s], 1];
  if (e - s === 1) {
    if (nums[s] === nums[e]) {
      return [nums[s], 2];
    }
    return [null, 0];
  }
  const pivote = ~~((s + e) / 2);
  const left = recurse(nums, s, pivote);
  const right = recurse(nums, pivote + 1, e);
  if (left[0] === right[0]) return [left[0], left[1] + right[1]];
  else {
    if (left[1] > right[1])
      return [left[0], countOccurance(nums, pivote + 1, e, left[0])];
    else if (left[1] < right[1])
      return [right[0], countOccurance(nums, s, pivote, right[0])];
    else {
      const leftOccurance = countOccurance(nums, pivote + 1, e, left[0]); // search majority element of left in right
      const rightOccurance = countOccurance(nums, s, pivote, right[0]); // do the reverse of above line
      if (leftOccurance > rightOccurance)
        return [left[0], leftOccurance + left[1]];
      else if (leftOccurance < rightOccurance)
        return [right[0], rightOccurance + right[1]];
      return [null, 0];
    }
  }
};

var countOccurance = function (nums, s, e, num) {
  let count = 0;
  for (let index = s; index <= e; index++) {
    if (nums[index] === num) count++;
  }
  return count;
};

/**
 * @swapnilmisal
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Divide
  const [element] = recurse(nums, 0, nums.length - 1);
  return element;
};
// @lc code=end
