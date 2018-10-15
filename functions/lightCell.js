// ./lightCell.js
const GRID = require("./grid").GRID;
const convertColumn = require("./convertColumn").convertColumn;
const convertRow = require("./convertRow").convertRow;
const countColumns = require("./countColumns").countColumns;
const countRows = require("./countRows").countRows;

const lightCell = coord => {
  const row_index = convertRow(coord);
  const col_index = convertColumn(coord);
  const grid_cell = row_index < countRows() && col_index < countColumns() ? GRID[row_index][col_index] : undefined;

  return grid_cell;
}

console.log(lightCell("B4"));

module.exports = {
  lightCell
};