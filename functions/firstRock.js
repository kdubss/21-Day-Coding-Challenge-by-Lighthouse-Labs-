// ./functions/firstRock.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const filterGridBy = require("./filterGridBy").filterGridBy;

const firstRock = () => {
  const rock = "^";
  const rock_coords = filterGridBy(rock);
  const first_rock = rock_coords[0];
  
  return first_rock;
};

module.exports = {
  firstRock
};