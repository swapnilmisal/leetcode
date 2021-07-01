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
var countNodes = function (root) {
  if (!root) return 0;

  let nodesMissing = 0;

  const getDepth = () => {
    let node = root;
    let depth = 0;
    while (node) {
      depth++;
      node = node.left;
    }
    return depth;
  };

  const depth = getDepth();
  const nodeExistsAtDepth = (d, node) => {
    let tempNode = node.right;
    while (tempNode) {
      tempNode = tempNode.left;
      d++;
    }
    if (d === depth) {
      return true;
    } else {
      return false;
    }
  };

  let node = root;
  for (let i = 1; i < depth; i++) {
    const isNodeExistsAtDepth = nodeExistsAtDepth(i, node);
    if (isNodeExistsAtDepth) node = node.right;
    else {
      nodesMissing += 2 ** (depth - (i + 1));
      node = node.left;
    }
  }

  return 2 ** depth - nodesMissing - 1;
};
