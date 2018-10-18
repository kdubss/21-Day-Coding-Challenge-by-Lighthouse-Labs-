// ./functions/allCurrents.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const filterGridBy = require("./filterGridBy").filterGridBy;

const allCurrents = () => {
  const current = "~";
  const all_currents_arr = filterGridBy(current);
    
  return all_currents_arr;
}

module.exports = {
  allCurrents
};