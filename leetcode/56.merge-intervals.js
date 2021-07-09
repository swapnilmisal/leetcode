/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  /*
  let lowerLimit = 10 ** 4;
  let upperLimit = 0;
  const response = [];
  const map = new Map(intervals);
  intervals.forEach(([start, end]) => {
    if (map.has(start)) {
      const currentEnd = map.get(start);
      const maxEnd = currentEnd > end ? currentEnd : end;
      map.set(start, maxEnd);
    } else {
      map.set(start, end);
    }

    lowerLimit = lowerLimit > start ? start : lowerLimit;
    upperLimit = upperLimit < start ? start : upperLimit;
  });

  for (let i = lowerLimit; i <= upperLimit; ) {
    if (map.has(i)) {
      let start = i;
      let end = map.get(i);

      while (i <= end) {
        const nextEnd = map.get(i) ? map.get(i) : 0;
        end = nextEnd > end ? nextEnd : end;
        i++;
      }
      response.push([start, end]);
    } else i++;
  }
  return response;
  */
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  for (const interval of sortedIntervals)
    if (!res.length || res[res.length - 1][1] < interval[0]) res.push(interval);
    else res[res.length - 1][1] = Math.max(res[res.length - 1][1], interval[1]);
};
