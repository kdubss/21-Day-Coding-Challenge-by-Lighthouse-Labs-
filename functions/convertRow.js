// ./functions/converRow.js
const GRID = require("./grid.js").GRID;

/**
 * [Function to fetch the length of GRID, the global variable referencing
 *  a 10x10 array]
 * @return {[Integer]} [Numerical integer specifying the rows (i.e. length)
 *                      of the GRID global variable]
 */
const convertRow = coordinate => {
  const row_num = coordinate.slice(1);
  const is_row_valid = row_num <= 10;
  const row_index = is_row_valid ? parseInt(row_num) - 1 : console.log(`Row index ${parseInt(row_num)} is an invalid row index of GRID`);
  
  return row_index;
};

module.exports = {
  convertRow
};