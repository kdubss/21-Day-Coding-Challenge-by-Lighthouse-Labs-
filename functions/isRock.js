// ./isRock.js
const GRID = require("./functions/grid").GRID;
const lightCell = require("./functions/lightCell").lightCell;

const isRock = coord => {
  const rock = "^";
  const is_rock = lightCell(coord) === rock;
  
  return is_rock;
};

module.exports = {
  isRock
};