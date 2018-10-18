// ./functions/getShipCoords.js
const GRID = require("./grid").GRID;
const countColumns = require("./countColumns").countColumns;
const countRows = require("./countRows").countRows;

const getSortedShipCoords = () => {
  let ship_coords = [];
  const ship = "v";
  
  for (let row = 0; row < countRows(); row++) {
    for (let col = 0; col < countColumns(); col ++) {
      if (GRID[row][col] === ship) {
        const coord = "abcdefghijklmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString();
        ship_coords.push(coord);
      }
    }
  }
  
  ship_coords = ship_coords.sort();
  
  return ship_coords;
};

module.exports = {
  getSortedShipCoords
};