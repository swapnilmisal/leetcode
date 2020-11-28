/**
 *
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/search-insert-position/ LeetCode}.
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let begin = 0;
  let end = nums.length - 1;
  while(begin <= end) {
    let i = Math.trunc((begin + end)/2);
    if(target === nums[i]){
      return i;
    }
    if(target > nums[i]){
      begin = i+1;
      if(begin >= nums.length)
        return begin;
      
    } else {
      end = i-1;
      if(end < 0)
        return 0
    }
 }
  
  if(target <= nums[begin]) {
    return begin;
  }
  
  return begin + 1;
    
};
