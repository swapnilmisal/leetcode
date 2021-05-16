/*
 * @lc app=leetcode id=895 lang=javascript
 *
 * [895] Maximum Frequency Stack
 */

// @lc code=start

var FreqStack = function () {
  this.freqStackMap = new Map();
  this.couterMap = new Map();
  this.frequency = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  let valFreq = 1;
  if (this.couterMap.has(val)) valFreq = this.couterMap.get(val) + 1;
  if (valFreq > this.frequency) this.frequency = valFreq;
  this.couterMap.set(val, valFreq);
  if (this.freqStackMap.has(valFreq)) this.freqStackMap.get(valFreq).push(val);
  else this.freqStackMap.set(valFreq, [val]);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const poppedElement = this.freqStackMap.get(this.frequency).pop();
  if (this.freqStackMap.get(this.frequency).length === 0) {
    this.freqStackMap.delete(this.frequency);
    this.frequency--;
  }

  const poppedElementFreq = this.couterMap.get(poppedElement);
  if (poppedElementFreq === 1) this.couterMap.delete(poppedElement);
  else this.couterMap.set(poppedElement, poppedElementFreq - 1);
  return poppedElement;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
// @lc code=end
