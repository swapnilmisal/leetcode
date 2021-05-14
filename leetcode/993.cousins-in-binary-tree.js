/*
 * @lc app=leetcode id=993 lang=javascript
 *
 * [993] Cousins in Binary Tree
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  const qStack = [];
  const queue = [];
  const parents = [];
  const pStack = [];

  queue.push(root);

  while (queue.length) {
    const xElement = queue.find((ele) => ele && ele.val === x);
    const yElement = queue.find((ele) => ele && ele.val === y);
    const xParents = parents.find(
      (node) =>
        (node.left && node.left.val === x) ||
        (node.right && node.right.val === x)
    );
    const yParents = parents.find(
      (node) =>
        (node.left && node.left.val === y) ||
        (node.right && node.right.val === y)
    );
    if ((xElement && !yElement) || (!xElement && yElement)) return false;
    if ((!xParents && yParents) || (xParents && !yParents)) return false;
    if (xParents && yParents && xParents.val === yParents.val) return false;
    if (xParents && yParents && xParents.val !== yParents.val) return true;

    parents.length = 0;
    while (queue.length) pStack.push(queue.pop());
    while (pStack.length) parents.push(pStack.pop());

    for (let i = parents.length - 1; i >= 0; i--) {
      const ele = parents[i];
      if (ele.left) qStack.push(ele.left);
      if (ele.right) qStack.push(ele.right);
    }
    while (qStack.length) queue.push(qStack.pop());
  }
  return false;
};
// @lc code=end
