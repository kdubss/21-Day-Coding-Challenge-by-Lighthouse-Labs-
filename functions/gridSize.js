// ./gridSize.js
const grid = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;

const gridSize = () => `${countColumns()} x ${countRows()}`;

module.exports = {
  gridSize
};