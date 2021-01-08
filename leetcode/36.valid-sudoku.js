/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const mapRow = new Map();
  const mapCol = new Map();
  const map = new Map();

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex++) {
      const elementCol = board[rowIndex][colIndex];
      if (elementCol !== ".")
        if (mapCol.has(elementCol)) return false;
        else mapCol.set(elementCol, elementCol);
      const elementRow = board[colIndex][rowIndex];
      if (elementRow !== ".")
        if (mapRow.has(elementRow)) return false;
        else mapRow.set(elementRow, elementRow);
    }
    mapCol.clear();
    mapRow.clear();
  }

  for (let rowIndex = 0; rowIndex < board.length - 2; rowIndex += 3) {
    for (
      let colIndex = 0;
      colIndex < board[rowIndex].length - 2;
      colIndex += 3
    ) {
      for (let rowComIndex = 0; rowComIndex < 3; rowComIndex++) {
        for (let colComIndex = 0; colComIndex < 3; colComIndex++) {
          const element = board[rowIndex + rowComIndex][colIndex + colComIndex];
          if (element !== ".")
            if (map.has(element)) return false;
            else map.set(element, element);
        }
      }
      map.clear();
    }
    map.clear();
  }

  return true;
};
// @lc code=end
