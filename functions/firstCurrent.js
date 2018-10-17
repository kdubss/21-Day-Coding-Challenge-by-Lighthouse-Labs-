// ./functions/firstCurrent.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;

const firstCurrent = () => {
  const currents_arr = [];
  const current = "~";
  
  for (let row = 0; row < countRows(); row++) {
    for (let col = 0; col < countColumns(); col++) {
      if (GRID[row][col] === current) {
        const current_coord = "abcdefghikjlmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString();
        currents_arr.push(current_coord);
      }
    }
  }
  
  const first_current = currents_arr[0]
  
  return first_current;
};

module.exports = {
  firstCurrent
};