// ./isShip.js
const GRID = require("./functions/grid").GRID
const lightCell = require("./functions/lightCell").lightCell;

const isShip = coord => {
  const ship = "V";
  const is_ship = lightCell(coord).toUpperCase() === ship;
  
  return is_ship
};

module.exports = {
  isShip
};