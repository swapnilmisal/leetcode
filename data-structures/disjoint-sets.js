/*
Disjoint set
Union By Rank & Find with path compression

Union By Rank for union of two components
Consider rank as height 
	if rank is same.
		Make parent of one component point to parent of another component
		Increase rank of a parant by one

	if ranks are different
		Make parent of lesser rank component point to a parent of higher rank component
		Do not increment the rank



Algorithm:
Constructor: numberOfNodes
  1.  parents initialize to -1 // all nodes are self components
  2.  ranks initialize to 0 // since the initial height will be 0 
      and for each component as these components will not have any parents

Union: i, j // indices of the nodes to be unioned
  1.  parentI = find(i); get absolute parent of i
  2.  parentJ = find(j); get absolute parent of j
  3.  if parentI is equal to parentJ
        1. return do nothing
  4.  if rank of parentI is greater than rank of parentJ
        1. make parentI as an absolute parent of parentJ
      else
        1. make parentJ as an absolute parent of parentI
  5.  if rank of parentI is equal to rank of parentJ
        1. increment rank of parentI

  Find: i // index of the node, find parent of the node at index i
    1.  parent = parents[i]
    2.  if parent === -1: // there is not parent of i, i is the root of the component
        return i
    3.  absParent = find(parent)
    4.  parents[i] = absParent // path compression
    5.  return absParent
*/

class DisjointSet {
  constructor(numberOfNodes) {
    //   initially array elements are pointing to self
    // Parents have absolute parents
    this.parents = Array.from(numberOfNodes).fill(-1);
    this.ranks = Array.from(numberOfNodes).fill(0);
  }
  unionByRank(i, j) {
    const parentI = this.find(i);
    const parentJ = this.find(j);
    if (parentI === parentJ) return false;
    if (this.ranks[parentI] > this.ranks[parentJ])
      this.parents[parentJ] = parentI;
    else this.parents[parentI] = parentJ;
    if (this.ranks[parentI] === this.ranks[parentsJ]) this.ranks[parentI]++;
    return true;
  }

  find(i) {
    const parent = this.parents[i];
    if (parent === -1) return i;
    const absParent = this.find(parent);
    this.parents[i] = absParent;
    return absParent;
  }
}

class ConnectedComponents extends DisjointSet {
  constructor(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const numberOfNodes = rows * cols;
    let components = 0;
    super(numberOfNodes);
    for (let i = 0; i < rows; i++)
      for (let j = 0; j < cols; j++) if (grid[i][j]) components++;
    this.connectedComponents = components;
  }

  union(i, j) {
    const isUnited = this.unionByRank(i, j);
    if (isUnited) this.connectedComponents--;
  }
}
