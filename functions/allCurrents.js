// ./functions/allCurrents.js
const GRID = require("./functions/grid").GRID;
const countRows = require("./functions/countRows").countRows;
const countColumns = require("./functions/countColumns").countColumns;

const allCurrents = () => {
  const all_currents_arr = [];
  const current = "~";
  
  for (let row = 0; row < countRows(); row++) {
    for (let col = 0; col < countColumns(); col++) {
      if (GRID[row][col] === current) {
        const current_coord = "abcdefghijklmnopqrstuwxyz".toUpperCase().charAt(col) + (row + 1).toString();
        all_currents_arr.push(current_coord);
      }
    }
  }
  
  return all_currents_arr;
}

module.exports = {
  allCurrents
};