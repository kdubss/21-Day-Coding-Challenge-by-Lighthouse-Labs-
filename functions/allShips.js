// ./functions/allShips.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;

const allShips = () => {
  const all_ships_arr = [];
  const ship = "v"
  
  for (row = 0; row < countRows(); row++) {
    for (col = 0; col < countColumns(); col++) {
      if (GRID[row][col] === ship) {
        const coord = "abcdefghijklmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString();
        all_ships_arr.push(coord);
      }
    }
  }
  
  return all_ships_arr;
};

module.exports = {
  allShips
};