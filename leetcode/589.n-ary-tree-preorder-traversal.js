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
  const stack = [];
  const res = [];
  stack.push(root);
  while (stack.length) {
    const node = stack[stack.length - 1];
    if (node.visited === undefined) node.visited = -1;
    node.visited += 1;
    if (node.visited >= node.children.length) res.push(node);
    else stack.push(node.children[node.visited]);
  }
  return res;
  /* 
  const res = [];
  const recurse = (node) => {
    if (!node) return;
    res.push(node.val);
    node.children.forEach((child) => recurse(child));
  };
  recurse(root);
  return res;

 */
};
// @lc code=end
