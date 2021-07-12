/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.array = new Array();
  this.map = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  const length = this.array.push(val);
  this.map.set(val, length - 1);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 *
 * Algorithm
 *	1.  if val does not exist in map:
 *			  return false
 *	2.  indexVal = map.get(val)
 *	3.	lastIndex = array.length - 1
 *	4.  array[indexVal] =  array[lastIndex]
 *	5.  lastIndexVal = array.pop()
 *	6.  map.set(lastIndexVal, index)
 *	6.  map.delete(val)
 *	7.  return true
 *		get the index of the val
 *	delete the element
 *
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  const indexVal = this.map.get(val);
  const lastIndex = this.array.length - 1;
  this.array[indexVal] = this.array[lastIndex];
  const lastIndexVal = this.array.pop();
  this.map.set(lastIndexVal, indexVal);
  return this.map.delete(val);
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.array.length);
  return this.array[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
