// ./isCurrent.js
const GRID = require("./functions/grid").GRID;
const lightCell = require("./functions/lightCell").lightCell;

const isCurrent = coord => {
  const current = "~";
  const is_current = lightCell(coord) === current;
  
  return is_current;
};

module.exports = {
  isCurrent
};