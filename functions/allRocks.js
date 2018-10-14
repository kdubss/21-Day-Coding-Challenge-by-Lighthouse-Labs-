// ./allRocks.js
const GRID = require("./functions/grid").GRID;
const countRows = require("./functions/countRows").countRows;
const countColumns = require("./functions/countColumns").countColumns;

const allRocks = () => {
  const all_rocks_arr = [];
  const rock = "^";
  
  for (let row = 0; row < countRows(); row++) {
    for (let col = 0; col < countColumns(); col++) {
      if (GRID[row][col] === rock) {
        const rock_coord = "abcdefghijklmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString();
        all_rocks_arr.push(rock_coord);
      }
    }
  }
  
  return all_rocks_arr;
};

module.exports = {
  allRocks
};