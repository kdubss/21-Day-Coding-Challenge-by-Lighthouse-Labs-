// ./functions/firstCurrent.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const filterGridBy = require("./filterGridBy").filterGridBy;

const firstCurrent = () => {
  const current = "~";
  const current_coords = filterGridBy(current);
  const first_current = current_coords[0]
  
  return first_current;
};

module.exports = {
  firstCurrent
};