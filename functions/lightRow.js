// ./functions/lightRow.js
const GRID = require("./grid").GRID;

/**
 * [lightRow returns the row array of GRID]
 * @param  {[Integer]} row_num [Integer number specifying a row of GRID]
 * @return {[Array]}         [Row array of GRID]
 */
const lightRow = row_num => GRID[parseInt(row_num) - 1];

module.exports = {
  lightRow
};