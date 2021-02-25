/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  var stack = [];
  var flag = false;
  var pf = false;
  var qf = false;
  const recurse = (node) => {
    if (!node || (flag && qf && pf)) return;
    const early = flag;
    if (!flag) {
      stack.push(node);
      if (p.val === node.val) pf = true;
      if (q.val === node.val) qf = true;
      if (p.val === node.val || q.val === node.val) flag = true;
    } else if (pf && q.val === node.val) {
      qf = true;
      return;
    } else if (qf && p.val === node.val) {
      pf = true;
      return;
    }
    recurse(node.left);
    recurse(node.right);
    console.log(node?.val, flag, early, qf, pf, stack);
    if (!flag || (early !== flag && !(flag && pf && qf))) stack.pop();
  };
  recurse(root);
  return stack.pop();
};
// @lc code=end
