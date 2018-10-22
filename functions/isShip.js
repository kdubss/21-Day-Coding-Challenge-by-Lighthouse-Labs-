// ./functions/isShip.js
const GRID = require("./grid").GRID
const lightCell = require("./lightCell").lightCell;

/**
 * [isShip returns true if the input coord of GRID yields a ship]
 * @param  {[String]}  coord [String value ("A8") for a GRID cell]
 * @return {Boolean}       [true if GRID cell is a ship ("v")]
 */
const isShip = coord => lightCell(coord) === "v";

module.exports = {
  isShip
};