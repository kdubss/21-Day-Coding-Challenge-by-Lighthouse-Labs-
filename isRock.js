// ./isRock.js
const GRID = require("./grid").GRID;
const convertColumn = require("./convertColumn").convertColumn;
const convertRow = require("./convertRow").convertRow;
const lightCell = require("./lightCell").lightCell;

const isRock = coord => {
  const rock = "^";
  const is_rock = lightCell(coord) === rock;
  
  return is_rock;
};

module.exports = {
  isRock
};