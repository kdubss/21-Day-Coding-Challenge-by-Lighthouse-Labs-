// ./isCurrent.js
const GRID = require("./grid").GRID;
const lightCell = require("./lightCell").lightCell;

const isCurrent = coord => {
  const current = "~";
  const is_current = lightCell(coord) === current;
  
  return is_current;
};

module.exports = {
  isCurrent
};