// ./functions/firstCurrent.js
const GRID = require("./grid").GRID;
const filterGridBy = require("./filterGridBy").filterGridBy;

/**
 * [firstCurrent returns GRID coordinate of first current]
 * @return {[String]} [String coordinate ("E3") of GRID corresponding to first current]
 */
const firstCurrent = () => {
  const current = "~";
  const current_coords = filterGridBy(current);
  const first_current = current_coords[0]
  
  return first_current;
};

module.exports = {
  firstCurrent
};