// ./functions/gridSize.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;

/**
 * [Returns the dimensions of GRID as a string]
 * @return {String} [String specifying the dimensions of GRID]
 */
const gridSize = () => `${countColumns()} x ${countRows()}`;

module.exports = {
  gridSize
};