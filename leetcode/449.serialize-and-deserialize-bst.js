/*
 * @lc app=leetcode id=449 lang=javascript
 *
 * [449] Serialize and Deserialize BST
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function (root) {
    if(!root) return null;
    const postorder = (root) => {
      if (!root) return "";
      let res = "";
      const leftVal = postorder(root.left);
      const rightVal = postorder(root.right);
      if (leftVal) res = res.concat(`${res && "-"}${leftVal}`);
      if (rightVal) res = res.concat(`${res && "-"}${rightVal}`);
      return `${res && res.concat('-')}${root.val}`;
    };
    const inorder = (root) => {
      if (!root) return "";
      let res = "";
      const leftVal = inorder(root.left);
      const rightVal = inorder(root.right);
      if (leftVal) res = res.concat(`${leftVal}`);
      if (res) res = res.concat(`-${root.val}`);
      else res = root.val.toString();
      if (rightVal) res = res.concat(`-${rightVal}`);
      return res;
    };
    return postorder(root).concat("\n").concat(inorder(root));
  };
  
  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  var deserialize = function (data) {
    if(!data) return null;
    let splittedArray = data.split("\n");
    let postorder = splittedArray[0].split("-");
    let inorder = splittedArray[1].split("-");
    const buildTree = (inorder) => {
      if(inorder.length === 0) return null;
      let value = postorder.pop();
      if (value === undefined) return null;
      const node = new TreeNode(value);
      const searchedIndex = inorder.findIndex((val) => val === value);
      node.right = buildTree(inorder.slice(searchedIndex + 1));
      node.left = buildTree(inorder.slice(0, searchedIndex));
      return node;
    };
    return buildTree(inorder);
  };
  
  /**
   * Your functions will be called as such:
   * deserialize(serialize(root));
   */
  // @lc code=end
  