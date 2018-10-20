// ./functions/percentageReport.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const totalCells = require("./totalCells").totalCells;
const filterGridBy = require("./filterGridBy").filterGridBy;

/**
 * [percentageReport returns the proportion of rock and current grids within GRID]
 * @return {[Array]} [Array of proportions of occurrences, of rocks and currents, respectively]
 */
const percentageReport = () => {
  const rock = "^";
  const current = "~";
  const proportion_of_rocks = ((filterGridBy(rock).length / totalCells()) * 100).toFixed(2)
  const proportion_of_currents = ((filterGridBy(current).length / totalCells()) * 100).toFixed(2);
  
  return [proportion_of_rocks, proportion_of_currents];
};

module.exports = {
  percentageReport
};