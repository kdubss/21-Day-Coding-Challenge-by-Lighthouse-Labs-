// ./lightCell.js
const grid = require("./grid").GRID;
const convertColumn = require("./convertColumn").convertColumn;
const convertRow = require("./convertRow").convertRow;

const lightCell = coord => grid[convertRow(coord)][convertColumn(coord)];

module.exports = {
  lightCell
};