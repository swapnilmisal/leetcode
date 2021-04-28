/*
 * @lc app=leetcode id=1302 lang=javascript
 *
 * [1302] Deepest Leaves Sum
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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let stack = [root];
  let queue = [];
  let sum = 0;
  while (stack.length) {
    sum = 0;
    do {
      const node = stack.pop();
      sum += node.val;
      queue.push(node);
    } while (stack.length);
    while (queue.length) {
      do {
        const node = queue.pop();
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
      } while (queue.length);
    }
  }
  return sum;
};
// @lc code=end
