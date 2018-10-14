// ./gridSize.js
const grid = require("./functions/grid").GRID;
const countRows = require("./functions/countRows").countRows;
const countColumns = require("./functions/countColumns").countColumns;

const gridSize = () => `${countColumns()} x ${countRows()}`;

module.exports = {
  gridSize
};