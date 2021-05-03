/*
 * @lc app=leetcode id=677 lang=javascript
 *
 * [677] Map Sum Pairs
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.map = new Map();
  this.end = false;
  this.total = 0;
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let current = this;
  for (const char of key) {
    if (current.map.has(char)) {
      current = current.map.get(char);
    } else {
      const newMapSum = new MapSum();
      current.map.set(char, newMapSum);
      current = newMapSum;
    }
  }
  current.end = true;
  current.total = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let current = this;
  for (const char of prefix) {
    if (current.map.has(char)) {
      current = current.map.get(char);
    } else {
      return 0;
    }
  }
  let total = 0;
  const rec = (curr) => {
    total += curr.total;
    for (const [char, map] of curr.map) {
      rec(map);
    }
  };
  rec(current);
  return total;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
// @lc code=end
