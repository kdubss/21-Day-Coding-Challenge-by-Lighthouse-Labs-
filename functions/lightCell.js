// ./lightCell.js
const GRID = require("./grid").GRID;
const convertColumn = require("./convertColumn").convertColumn;
const convertRow = require("./convertRow").convertRow;
const countColumns = require("./countColumns").countColumns;
const countRows = require("./countRows").countRows;

/**
 * [Shows the content of GRID when given a cell-coordinate (i.e. "A1")]
 * @param  {[String]} coord [Coordinates for a cell in GRID (i.e. B10)]
 * @return {[String]} [String value referencing the cell content of GRID]
 */
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