// ./functions/filterGridBy.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;

/**
 * [filterGridBy returns sub array of GRID filterd by fltr_by]
 * @param  {[String]} fltr_by [String value specifying what GRID is to be filtered by]
 * @return {[Array]}         [Sub array of GRID composed only of cells specified by fltr_by]
 */
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