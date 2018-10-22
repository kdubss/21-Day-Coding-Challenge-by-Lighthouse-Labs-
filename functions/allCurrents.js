// ./functions/allCurrents.js
const GRID = require("./grid").GRID;
const filterGridBy = require("./filterGridBy").filterGridBy;

/**
 * [allCurrents returns array of all coordinates featuring currents]
 * @return {[Array]} [Array of GRID coordinates ("D1") featuring cells w/ currents ("~")]
 */
const allCurrents = () => filterGridBy("~");

module.exports = {
  allCurrents
};