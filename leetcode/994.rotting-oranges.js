/**
Algorithm: grid
  1. aux = [], stack = [], visited = [], minutes = 0
  2. stack = findAllRottenApples()
  3. while stack is not empty
     1. for each stack element
          1. neighbours = visit(element)
          2. aux.push(neighbours)
          3. visited[element.X][element.y] = true
     2. stack = aux
     3. aux = []
     4. minutes++
   4. traverse grid
      1. if fresh apple exist
           return -1
   5. return minutes
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let [aux, stack, minutes] = [[], [], 0];
  const [empty, fresh, rotten] = [0, 1, 2];
  const [rows, cols] = [grid.length, grid[0].length];
  const visited = Array.from(Array(rows), (_) => Array(cols).fill(false));

  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++)
      if (grid[i][j] === rotten) stack.push([i, j]);

  while (stack.length) {
    stack.forEach(([x, y]) => {
      [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ].forEach(([dx, dy]) => {
        let [adjX, adjY] = [x + dx, y + dy];
        if (
          !(
            adjX < 0 ||
            adjX >= rows ||
            adjY < 0 ||
            adjY >= cols ||
            visited[adjX][adjY]
          ) &&
          grid[adjX][adjY] === fresh
        ) {
          aux.push([adjX, adjY]);
          grid[adjX][adjY] = rotten;
        }
      });
      visited[x][y] = true;
    });

    stack = aux;
    aux = [];
    if (stack.length) minutes++;
  }
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++) if (grid[i][j] === fresh) return -1;

  return minutes;
};
