/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  /*
  const isAbsent = (str) => {
    let count = 0;
    for (const char of str) {
      if (char === "A") count++;
      if (count === 2) return true;
    }
    return false;
  };
  const isLate = (str) => {
    i = 0;
    while (i < str.length) {
      if (str[i] === "L" && str[i + 1] === "L" && str[i + 2] === "L")
        return true;
      i++;
    }
    return false;
  };

  return !isLate(s) && !isAbsent(s);
  */
  return !s.match(".*(A.*A|LLL).*");
};
// @lc code=end
