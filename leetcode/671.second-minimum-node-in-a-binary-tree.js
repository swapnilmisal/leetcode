/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
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
var findSecondMinimumValue = function (root) {
  if (!root.left) return -1;
  if (root.left.val === root.right.val) {
    const leftRes = findSecondMinimumValue(root.left);
    const rightRes = findSecondMinimumValue(root.right);
    if (leftRes === -1) return rightRes;
    else if (rightRes === -1) return leftRes;
    return Math.min(leftRes, rightRes);
  }
  const [matched, current] =
    root.left.val === root.val
      ? [root.left, root.right]
      : [root.right, root.left];
  const res = findSecondMinimumValue(matched);
  if (res === -1) return Math.max(res, current.val);
  return Math.min(res, current.val);
};
// @lc code=end
