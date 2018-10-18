// ./functions/filterGridBy.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;

const filterGridBy = (fltr_by) => {
  const filtered_array = [];
  
  for (let row = 0; row < countRows(); row++) {
    for (let col = 0; col < countColumns(); col++) {
      if (GRID[row][col] === fltr_by) {
        const coord = "abcdefghijklmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString();
        filtered_array.push(coord);
      }
    }
  }
  
  return filtered_array;
};

module.exports = {
  filterGridBy
};