// ./lightCell.js
const GRID = require("./functions/grid").GRID;
const convertColumn = require("./functions/convertColumn").convertColumn;
const convertRow = require("./functions/convertRow").convertRow;
const countColumns = require("./functions/countColumns").countColumns;
const countRows = require("./functions/countRows").countRows;

const lightCell = coord => {
  const row_index = convertRow(coord);
  const column_index = convertColumn(coord);
  const grid_cell = row_index < countRows() && column_index < countColumns() ? GRID[row_index][column_index] : console.log("Invalid GRID coordinates");

  return grid_cell;
};

module.exports = {
  lightCell
};