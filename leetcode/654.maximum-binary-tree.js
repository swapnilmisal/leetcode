/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const stack = [];

  nums.forEach((num) => {
    const current = new TreeNode(num);
    while (stack.length && stack[stack.length - 1].val < current.val) {
      const top = stack.pop();
      current.left = top;
    }
    if (stack.length) stack[stack.length - 1].right = current;
    stack.push(current);
  });
  return stack[0];
};
// @lc code=end
