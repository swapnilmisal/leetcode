/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const isMirror = (t1, t2) => {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;

    return (
      t1.val === t2.val &&
      isMirror(t1.left, t2.right) &&
      isMirror(t1.right, t2.left)
    );
  };

  return isMirror(root, root);

  /*   if (!root) return true;
  let queue = [root];
  let nodes = [];
  do {
    nodes = [];
    while (queue.length) {
      const node = queue.shift();
      if (node) {
        nodes.push(node.left);
        nodes.push(node.right);
      }
    }
    queue = nodes;
    if (nodes.length % 2) return false;
    for (
      let index = 0, revIndex = nodes.length - 1;
      index < nodes.length / 2;
      index++
    ) {
      if (nodes[index] && nodes[revIndex - index]) {
        if (nodes[index].val !== nodes[revIndex - index].val) return false;
      } else if (nodes[index] || nodes[revIndex - index]) return false;
    }
  } while (nodes.length);
  return true;
 */
};
// @lc code=end
