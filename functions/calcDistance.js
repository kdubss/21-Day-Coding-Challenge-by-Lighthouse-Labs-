// ./functions/calcDistance.js
const GRID = require("./grid").GRID;
const convertRow = require("./convertRow").convertRow;
const convertColumn = require("./convertColumn").convertColumn;

/**
 * [getDistance4CellsOnSameRow returns the distance between GRID cells on same row of GRID]
 * @param  {[String]} coord1 [GRID coordinate (i.e. "A1")]
 * @param  {[String]} coord2 [GRID coorinate (i.e. "A1")]
 * @return {[Number]}        [Floating point number representing distance]
 */
const getDistance4CellsOnSameRow = (coord1, coord2) => {
  const c1_col_index = convertColumn(coord1);
  const c2_col_index = convertColumn(coord2);
  const distance = c1_col_index > c2_col_index ? c1_col_index - c2_col_index : c2_col_index - c1_col_index;
  
  return distance;
};

/**
 * [getDistance4CellsOnSameColumn returns the distance between GRID cells on same column of GRID]
 * @param  {[String]} coord1 [GRID coordinate (i.e. "A1")]
 * @param  {[String]} coord2 [GRID coordinate (i.e. "A2")]
 * @return {[Number]}        [Floating point number representing distance]
 */
const getDistance4CellsOnSameColumn = (coord1, coord2) => {
  const c1_row_index = convertRow(coord1);
  const c2_row_index = convertRow(coord2);
  const distance = c1_row_index > c2_row_index ? c1_row_index - c2_row_index : c2_row_index - c1_row_index;
  
  return distance;
};

/**
 * [getHypotenuseDistance returns the distance between GRID cells for coordinates on different GRID rows and columns]
 * @param  {[String]} coord1 [GRID cooridnate (i.e. "A1")]
 * @param  {[String]} coord2 [GRID coordinate (i.e. "A1")]
 * @return {[Number]}        [Floating point number representing distance]
 */
const getHypotenuseDistance = (coord1, coord2) => {
  const c1_row_index = convertRow(coord1);
  const c2_row_index = convertRow(coord2);
  const c1_col_index = convertColumn(coord1);
  const c2_col_index = convertColumn(coord2);
  const distance = parseFloat(Math.sqrt(((c2_col_index - c1_col_index) ** 2) + ((c2_row_index - c1_row_index) ** 2)));
  
  return distance.toFixed(2);
};

/**
 * [calcDistance returns the distance between any two coordinates on GRID]
 * @param  {[Sting]} coord1 [GRID coordinate (i.e. "A1")]
 * @param  {[String]} coord2 [GRID coordinate ("A1")]
 * @return {[Number]}        [Floating point number representing distance]
 */
const calcDistance = (coord1, coord2) => {
  const distance = getHypotenuseDistance(coord1, coord2);
  
  return distance;
};

module.exports = {
  getDistance4CellsOnSameRow, 
  getDistance4CellsOnSameColumn, 
  getHypotenuseDistance,
  calcDistance
};