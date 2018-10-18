// ./functions/countColumns.js
const GRID = require("./grid.js").GRID;

/**
 * [Function to fetch the length of the first row of the GRID global variable]
 * @return {Number} [A number (i.e. no. columns) within GRID]
 */
const countColumns = () => GRID[0].length;

module.exports = {
  countColumns
};