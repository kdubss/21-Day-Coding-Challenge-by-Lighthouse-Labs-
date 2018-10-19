// ./functions/isShip.js
const GRID = require("./grid").GRID
const lightCell = require("./lightCell").lightCell;

/**
 * [isShip returns true if the input coord of GRID yields a ship]
 * @param  {[String]}  coord [String value ("A8") for a GRID cell]
 * @return {Boolean}       [true if GRID cell is a ship ("v")]
 */
const isShip = coord => {
  const ship = "V";
  const is_ship = lightCell(coord).toUpperCase() === ship;
  
  return is_ship
};

module.exports = {
  isShip
};