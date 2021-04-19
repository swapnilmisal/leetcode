/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
var diameterOfBinaryTree = function (root) {
  let max = 0;
  const dfs = (node) => {
    if (!node) return 0;
    const heightLeftSubtree = dfs(node.left);
    const heightRightSubtree = dfs(node.right);
    max = Math.max(max, heightLeftSubtree + heightRightSubtree);
    return Math.max(heightLeftSubtree, heightRightSubtree) + 1;
  };
  dfs(root);
  return max;
};
// @lc code=end
