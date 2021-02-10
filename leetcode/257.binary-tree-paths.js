/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return [];
  const appendPath = (path) => `${root.val}->`.concat(path);
  const leftPaths = binaryTreePaths(root.left);
  const rightPaths = binaryTreePaths(root.right);
  const updateLeftPaths = leftPaths.map(appendPath);
  const updatedRightPaths = rightPaths.map(appendPath);
  const paths = [...updateLeftPaths, ...updatedRightPaths];
  if (paths.length) return paths;
  return [`${root.val}`];
};
// @lc code=end
