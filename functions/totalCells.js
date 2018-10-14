// ./totalCells.js
const grid = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;

const totalCells = () => countColumns() * countRows();

module.exports = {
  totalCells
};