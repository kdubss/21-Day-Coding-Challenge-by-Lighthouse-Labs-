// ./functions/allShips.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const filterGridBy = require("./filterGridBy").filterGridBy;

const allShips = () => {
  const ship = "v"
  const all_ships_arr = filterGridBy(ship);
  
  return all_ships_arr;
};

module.exports = {
  allShips
};