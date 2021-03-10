/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  const res = [];
  const recurse = (node) => {
    if (!node) return;
    node.children.forEach((child) => recurse(child));
    res.push(node.val);
  };
  recurse(root);
  return res;
};
// @lc code=end
