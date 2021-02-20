/*
 * @lc app=leetcode id=669 lang=javascript
 *
 * [669] Trim a Binary Search Tree
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) return null;
  if (root.val > low) root.left = trimBST(root.left, low, high);
  else root.left = null;
  if (root.val < high) root.right = trimBST(root.right, low, high);
  else root.right = null;
  if (root.val >= low && root.val <= high) return root;
  else if (root.val > high) return root.left;
  else return root.right;
};
// @lc code=end
