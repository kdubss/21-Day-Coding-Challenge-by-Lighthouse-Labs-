// ./functions/getPercentageOfInGrid.js
const GRID = require("./grid").GRID;
const filterGridBy = require("./filterGridBy").filterGridBy;
const totalCells = require("./totalCells").totalCells;

/**
 * [getPercentageOfInGrid returns total % of contents ("^") there are in GRID]
 * @param  {[Stirng]} of_what [Cell contents within a GRID coord (i.e. "^")]
 * @return {[String]} [Percentage of cell content in GRID (i.e. "9.00")]
 */
const getPercentageOfInGrid = (of_what) => {
  const proportion_of = (filterGridBy(of_what).length / totalCells()) * 100;
  const percentage_of = proportion_of.toFixed(2);
  
  return percentage_of;
};

module.exports = {
  getPercentageOfInGrid
};