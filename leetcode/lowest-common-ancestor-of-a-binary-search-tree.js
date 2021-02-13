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
 * {@link https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/ LeetCode},
 * {@link https://github.com/swapnilmisal/algorithms-data-structures-implementation github}
 * @author Swapnil Misal <swapnil.misal@gmail.com>
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const [small, big] = p.val < q.val ? [p.val, q.val] : [q.val, p.val];
  if (root.val >= small && root.val <= big) return root;
  if (root.val >= small && root.val >= big && root.left)
    return lowestCommonAncestor(root.left, p, q);
  if (root.right) return lowestCommonAncestor(root.right, p, q);
};
