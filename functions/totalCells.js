// ./functions/totalCells.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;

/**
 * [Function to return the total number of cells within GRID]
 * @return {[Number - Integer]} [Integer value specifying the no. cells in GRID]
 */
const totalCells = () => countColumns() * countRows();

module.exports = {
  totalCells
};