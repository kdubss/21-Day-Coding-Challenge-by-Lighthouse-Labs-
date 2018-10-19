// ./functions/allCurrents.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const filterGridBy = require("./filterGridBy").filterGridBy;

/**
 * [allCurrents returns array of all coordinates featuring currents]
 * @return {[Array]} [Array of GRID coordinates ("D1") featuring cells w/ currents ("~")]
 */
const allCurrents = () => {
  const current = "~";
  const all_currents_arr = filterGridBy(current);
    
  return all_currents_arr;
}

module.exports = {
  allCurrents
};