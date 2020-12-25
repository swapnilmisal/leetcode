/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Checkout the LeetCode problem description
 * {@link https://leetcode.com/problems/path-sum/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false;
  if (!root.left && !root.right)
    if (!(root.val - sum)) return true;
    else return false;
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};
