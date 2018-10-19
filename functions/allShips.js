// ./functions/allShips.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const filterGridBy = require("./filterGridBy").filterGridBy;

/**
 * [allShips returns array of all coordinates featuring ships]
 * @return {[Array]} [Array of GRID coordinates ("E7") featuring cells w/ ships ("v")]
 */
const allShips = () => {
  const ship = "v"
  const all_ships_arr = filterGridBy(ship);
  
  return all_ships_arr;
};

module.exports = {
  allShips
};