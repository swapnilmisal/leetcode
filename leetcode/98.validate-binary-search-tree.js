/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root || (!root.left && !root.right)) return true;
  const sortedArray = [];
  inorderTraversal(root, sortedArray);
  for (let index = 1; index < sortedArray.length; index++) {
    if (sortedArray[index - 1] >= sortedArray[index]) return false;
  }
  return true;
};
var inorderTraversal = function (node, sortedArray = []) {
  if (!node) return;
  inorderTraversal(node.left, sortedArray);
  sortedArray.push(node.val);
  inorderTraversal(node.right, sortedArray);
};
// @lc code=end
