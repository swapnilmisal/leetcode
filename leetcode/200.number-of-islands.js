class DisjointSet {
  constructor(numberOfNodes) {
    //   initially array elements are pointing to self
    // Parents have absolute parents
    this.parents = new Array(numberOfNodes).fill(-1);
    this.ranks = new Array(numberOfNodes).fill(0);
  }
  unionByRank(i, j) {
    const parentI = this.find(i);
    const parentJ = this.find(j);
    if (parentI === parentJ) return false;
    if (this.ranks[parentI] > this.ranks[parentJ])
      this.parents[parentJ] = parentI;
    else this.parents[parentI] = parentJ;
    if (this.ranks[parentI] === this.ranks[parentJ]) this.ranks[parentI]++;
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
      for (let j = 0; j < cols; j++) if (+grid[i][j]) components++;
    this.numberOfComponents = components;
  }

  union(i, j) {
    const isUnited = this.unionByRank(i, j);
    if (isUnited) this.numberOfComponents--;
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const connectedComponents = new ConnectedComponents(grid);
  const rows = grid.length;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (+grid[i][j]) {
        const neighbours = [
          [0, 1],
          [0, -1],
          [1, 0],
          [-1, 0],
        ];
        neighbours.forEach(([i_, j_]) => {
          const adjI = i + i_;
          const adjJ = j + j_;
          if (
            adjI >= 0 &&
            adjI < rows &&
            adjJ >= 0 &&
            adjJ < cols &&
            +grid[adjI][adjJ]
          ) {
            const currentNode = i * cols + j;
            const otherNode = adjI * cols + adjJ;
            connectedComponents.union(currentNode, otherNode);
          }
        });
      }
    }
  }
  return connectedComponents.numberOfComponents;
};
