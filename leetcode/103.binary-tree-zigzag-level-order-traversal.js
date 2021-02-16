/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let stack = [root];
  let leftTrack = true;
  const result = [];
  while (stack.length) {
    let newStack = [];
    let parRes = [];
    while (stack.length) {
      const node = stack.pop();
      parRes.push(node.val);
      if (leftTrack) {
        if (node.left) newStack.push(node.left);
        if (node.right) newStack.push(node.right);
      } else {
        if (node.right) newStack.push(node.right);
        if (node.left) newStack.push(node.left);
      }
    }
    leftTrack = !leftTrack;
    stack = newStack;
    result.push(parRes);
  }
  return result;
};
// @lc code=end
