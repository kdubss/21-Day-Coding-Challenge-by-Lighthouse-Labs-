// ./functions/getShipCoords.js
const GRID = require("./grid").GRID;
const countColumns = require("./countColumns").countColumns;
const countRows = require("./countRows").countRows;
const filterGridBy = require("./filterGridBy").filterGridBy;

const getSortedShipCoords = () => {
  const ship = "v";
  let ship_coords = filterGridBy(ship)
  ship_coords = ship_coords.sort();
  
  return ship_coords;
};

module.exports = {
  getSortedShipCoords
};