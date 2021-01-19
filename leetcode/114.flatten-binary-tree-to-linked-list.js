/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return;
  flatten(root.left);
  flatten(root.right);
  const rootRightNode = root.right;
  let tempLeftNode = root.left;
  let prevNode = null;
  while (tempLeftNode) {
    prevNode = tempLeftNode;
    tempLeftNode = tempLeftNode.right;
  }
  if (prevNode) prevNode.right = rootRightNode;
  if (root.left) root.right = root.left;
  root.left = null;
};
// @lc code=end
