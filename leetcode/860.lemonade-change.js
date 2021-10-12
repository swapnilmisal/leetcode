/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fys = 0;
  let tens = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) fys++;
    else if (bills[i] === 10) {
      fys--;
      tens++;
      if (fys < 0) return false;
    } else {
      if (tens && fys >= 1) {
        tens--;
        fys--;
      } else if (fys >= 3) {
        fys -= 3;
      } else return false;
    }
  }
  return true;
};
// @lc code=end
