// ./functions/allRocks.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const filterGridBy = require("./filterGridBy").filterGridBy;

/**
 * [allRocks returns array of all coordinates featuring rocks]
 * @return {[Array]} [Array of GRID coordinates ("A3") featuring cells w/ rocks ("^")]
 */
const allRocks = () => {
  const rock = "^";
  const all_rocks_arr = filterGridBy(rock);
  
  return all_rocks_arr;
};



module.exports = {
  allRocks
};