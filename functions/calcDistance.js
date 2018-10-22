// ./functions/calcDistance.js
const GRID = require("./grid").GRID;
const convertRow = require("./convertRow").convertRow;
const convertColumn = require("./convertColumn").convertColumn;

const getDistance4CellsOnSameRow = (coord1, coord2) => {
  const c1_col_index = convertColumn(coord1);
  const c2_col_index = convertColumn(coord2);
  const distance = c1_col_index > c2_col_index ? c1_col_index - c2_col_index : c2_col_index - c1_col_index;
  
  return distance;
};

const getDistance4CellsOnSameColumn = (coord1, coord1) => {
  const c1_row_index = convertRow(coord1);
  const c2_row_index = convertRow(coord2);
  const distance = c1_row_index > c2_row_index ? c1_row_index - c2_row_index : c2_row_index - c1_row_index;
  
  return distance;
};

const getHypotenuseDistance = (coord1, coord2) => {
  
};

const calcDistance = (coord1, coord2) => {
  
};

module.exports = {
  getDistance4CellsOnSameRow, 
  getDistance4CellsOnSameColumn, 
  getHypotenuseDistance,
  calcDistance
};