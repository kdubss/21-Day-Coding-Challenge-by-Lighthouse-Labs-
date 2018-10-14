// ./lightRow.js
const GRID = require("./functions/grid").GRID;

const lightRow = row_num => GRID[parseInt(row_num) - 1];

module.exports = {
  lightRow
};