// ./functions/lightColumn.js
const GRID = require("./grid").GRID;
const convertColumn = require("./convertColumn").convertColumn;
const countRows = require("./countRows").countRows;

/**
 * [lightColumn returns the GRID column specified by the coord_letter]
 * @param  {[String]} coord_letter [String ("A") specifying the column no. of GRID]
 * @return {[Array]}              [Column array corresponding to the coord_letter]
 */
const lightColumn = coord_letter => {
  const column_index = convertColumn(coord_letter);
  const column_array = [];
  
  for (let row = 0; row < countRows(); row++) {
    column_array.push(GRID[row][column_index]);
  }
  
  return column_array;
};

module.exports = {
  lightColumn
};