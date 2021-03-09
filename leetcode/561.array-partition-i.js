/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  // sorting can take nlogn space and nlogn time complexity so it's not very good approach
  // The preferable approach here could be to use linear sort and the space of the sorted array;
  /* 
  const sortedNum = nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < sortedNum.length; i += 2) count += sortedNum[i];
  return count;

 */
  let array = [...nums];
  let maxNum = Math.abs(Math.max(...nums));
  let minNum = Math.abs(Math.min(...nums));
  maxNum = Math.max(maxNum, minNum);
  const length = ~~Math.log10(maxNum);
  for (let i = 0; i <= length; i++) {
    const map = new Map();
    array.forEach((element) => {
      let key = ~~(element / 10 ** i) % 10;
      if (map.has(key)) map.get(key).push(element);
      else map.set(key, [element]);
    });
    let temp = [];
    for (let i = -9; i < 10; i++) if (map.has(i)) temp.push(...map.get(i));
    array = [...temp];
  }

  let count = 0;
  for (let i = 0; i < array.length; i += 2) count += array[i];
  return count;
};
// @lc code=end
