// ./functions/isRock.js
const GRID = require("./grid").GRID;
const lightCell = require("./lightCell").lightCell;

/**
 * [isRock returns true or false if the input coordinate for GRID is a rock]
 * @param  {[String]}  coord [String value ("D1") for a GRID cell]
 * @return {Boolean}       [true if GRID cell is a rock ("^")]
 */
const isRock = coord => lightCell(coord) === "^";

module.exports = {
  isRock
};