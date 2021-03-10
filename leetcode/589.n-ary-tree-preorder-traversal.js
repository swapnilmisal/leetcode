/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  const res = [];
  const recurse = (node) => {
    if (!node) return;
    res.push(node.val);
    node.children.forEach((child) => recurse(child));
  };
  recurse(root);
  return res;
};
// @lc code=end
