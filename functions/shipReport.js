// ./functions/shipReport.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const getSortedShipCoords = require("./getSortedShipCoords").getSortedShipCoords;

/**
 * [shipReport returns GRID coordinates of first and last ship]
 */
const shipReport = () => {
  const sorted_ship_coords = getSortedShipCoords();
  const first_and_last_ship = [
    sorted_ship_coords[0], 
    sorted_ship_coords[sorted_ship_coords.length - 1]
  ];
  
  return first_and_last_ship;
};

module.exports = {
  shipReport
};