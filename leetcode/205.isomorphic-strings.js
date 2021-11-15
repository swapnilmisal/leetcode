/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const obj = {};
  const set = new Set();
  const length = s.length;

  for (let i = 0; i < length; i++) {
    const char = s[i];
    const tChar = t[i];
    const mappedChar = obj[char];
    if (mappedChar) {
      if (mappedChar !== tChar) return false;
    } else if (set.has(tChar)) {
      return false;
    } else {
      set.add(tChar);
      obj[char] = tChar;
    }
  }
  return true;
};
// console.log(isIsomorphic("089427359827435", "ajsdf;lkajsdflk"));
//console.log(isIsomorphic("ad", "da"));
// @lc code=end

/*
  const makeCharObj = (str) => {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
      if (!obj[str[i]]) obj[str[i]] = 1;
      else obj[str[i]]++;
    }
    return obj;
    // checked
  };

  const makeCountMap = (obj) => {
    const map = new Map();
    for (const val of Object.values(obj)) {
      if (!map.has(val)) map.set(val, 1);
      else map.set(val, map.get(val) + 1);
    }
    return map;
    //checked
  };

  const isEqualObjLength = (first, second) => {
    return Object.keys(first).length === Object.keys(second).length;
    //checked
  };

  const isEqualMapLength = (first, second) => {
    return first.keys().length === second.keys().length;
    //checked
  };

  const areMapsEqual = (first, second) => {
    for (const key of first.keys()) {
      if (first.get(key) !== second.get(key)) return false;
    }
    return true;
  };

  console.log(s, t);
  const sobj = makeCharObj(s);
  const tobj = makeCharObj(t);
  console.log(sobj, tobj);
  if (!isEqualObjLength(sobj, tobj)) return false;
  const svmap = makeCountMap(sobj);
  const tvmap = makeCountMap(tobj);
  console.log(svmap, tvmap);
  return isEqualMapLength(svmap, tvmap) && areMapsEqual(svmap, tvmap);
*/
