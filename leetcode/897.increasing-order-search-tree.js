/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
 * @param {TreeNode} node
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const recurse = (node) => {
    if (!node) return [null, null];

    const [smallest, smaller] = recurse(node.left);
    const [greater, greatest] = recurse(node.right);
    if (smaller) smaller.right = node;

    node.right = greater;
    node.left = null;

    const first = smallest || node;
    const second = greatest || node;
    return [first, second];
  };
  const [output] = recurse(root);
  return output;
};
// @lc code=end
