// ./lightColumn.js
const GRID = require("./functions/grid").GRID;
const convertColumn = require("./functions/convertColumn").convertColumn;

const lightColumn = coord_letter => {
  const column_index = convertColumn(coord_letter);
  const column_array = [];
  
  for (let row = 0; row < GRID.length; row++) {
    column_array.push(GRID[row][column_index]);
  }
  
  return column_array;
};

module.exports = {
  lightColumn
};