/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function (root) {
  if (!root) return true;

  const getHeight = (node, ct) => {
    if (!node) return [true, ct - 1];
    const leftTrv = getHeight(node.left, ct + 1);
    const rightTrv = getHeight(node.right, ct + 1);
    const height = leftTrv[1] > rightTrv[1] ? leftTrv[1] : rightTrv[1];
    return [
      Math.abs(leftTrv[1] - rightTrv[1]) < 2 && leftTrv[0] && rightTrv[0],
      height,
    ];
  };

  const leftTrv = getHeight(root.left, 1);
  const rightTrv = getHeight(root.right, 1);
  return Math.abs(leftTrv[1] - rightTrv[1]) < 2 && leftTrv[0] && rightTrv[0];
};
// @lc code=end
