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
  if (!root) return [];
  const stack = [];
  const res = [];
  stack.push(root);
  while (stack.length) {
    const node = stack[stack.length - 1];
    if (node.visited === undefined) node.visited = -1;
    node.visited += 1;
    if (node.visited >= node.children.length) res.push(stack.pop().val);
    else stack.push(node.children[node.visited]);
  }
  return res;
  /* 
  const res = [];
  const recurse = (node) => {
    if (!node) return;
    node.children.forEach((child) => recurse(child));
    res.push(node.val);
  };
  recurse(root);
  return res;
 */
};
// @lc code=end
