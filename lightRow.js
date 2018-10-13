// ./lightRow.js
const GRID = require("./grid").GRID;

const lightRow = row_num => GRID[parseInt(row_num) - 1];

module.exports = {
  lightRow
};