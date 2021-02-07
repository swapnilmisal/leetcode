/*
 * @lc app=leetcode id=783 lang=javascript
 *
 * [783] Minimum Distance Between BST Nodes
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
 * @return {number}
 */
var minDiffInBST = function (root) {
  if (!root || (!root.left && !root.right)) return Infinity;
  const leftMinVal = minDiffInBST(root.left);
  const rightMinVal = minDiffInBST(root.right);
  let rootLeftMinVal = Infinity;
  let rootRightMinVal = Infinity;
  let leftNode = root.left;
  let rightNode = root.right;
  while (leftNode?.right) leftNode = leftNode.right;
  while (rightNode?.left) rightNode = rightNode.left;
  if (leftNode) rootLeftMinVal = root.val - leftNode.val;
  if (rightNode) rootRightMinVal = rightNode.val - root.val;
  return Math.min(leftMinVal, rightMinVal, rootLeftMinVal, rootRightMinVal);
};
// @lc code=end
