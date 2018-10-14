// ./isShip.js
const GRID = require("./grid").GRID
const lightCell = require("./lightCell").lightCell;

const isShip = coord => {
  const ship = "V";
  const is_ship = lightCell(coord).toUpperCase() === ship;
  
  return is_ship
};

module.exports = {
  isShip
};