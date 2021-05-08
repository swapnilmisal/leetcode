/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const map = new Map();
  let count = 0;
  const preorder = (node, currVal) => {
    if (!node) return;
    const newVal = currVal + node.val;
    if (newVal === targetSum) count++;
    count += map.get(newVal - targetSum) ?? 0;
    map.set(newVal, map.has(newVal) ? map.get(newVal) + 1 : 1);
    preorder(node.left, newVal);
    preorder(node.right, newVal);
    map.set(newVal, map.get(newVal) - 1);
  };
  preorder(root, 0);
  return count;
};
// @lc code=end
