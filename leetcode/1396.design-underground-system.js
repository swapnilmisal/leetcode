var UndergroundSystem = function () {
  this.live = new Map();
  this.journeys = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.live.set(id, [stationName, t]);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const start = this.live.get(id);
  const duration = t - start[1];
  this.live.delete(id);
  const journey = `${start[0]}-${stationName}`;
  if (this.journeys.has(journey)) {
    const record = this.journeys.get(journey);
    record[0]++;
    record[1] += duration;
    this.journeys.set(journey, record);
  } else {
    this.journeys.set(journey, [1, duration]);
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  const record = this.journeys.get(`${startStation}-${endStation}`);
  return (record[1] / record[0]).toFixed(5)
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
