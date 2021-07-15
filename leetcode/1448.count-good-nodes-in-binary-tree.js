/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *
 * @param {TreeNode} root
 * @param {number} max
 * @returns
var goodNodes = function (root, max = -10001) {
  if (!root) return 0;
  const newMax = max > root.val ? max : root.val;

  return (
    !(max > root.val) +
    goodNodes(root.left, newMax) +
    goodNodes(root.right, newMax)
  );
};
 */

/**
 * @param {TreeNode} root
 * @param {number} max
 * @return {number}
 */
var goodNodes = function (root, max = -10001) {
  if (!root) return 0;
  const newMax = max > root.val ? max : root.val;
  const currentGoodNodeCount = max > root.val ? 0 : 1;
  const goodNodesFromLeft = goodNodes(root.left, newMax);
  const goodNodesFromRight = goodNodes(root.right, newMax);
  return currentGoodNodeCount + goodNodesFromLeft + goodNodesFromRight;
};
