// ./allRocks.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const filterGridBy = require("./filterGridBy").filterGridBy;

const allRocks = () => {
  const rock = "^";
  const all_rocks_arr = filterGridBy(rock);
  
  return all_rocks_arr;
};



module.exports = {
  allRocks
};