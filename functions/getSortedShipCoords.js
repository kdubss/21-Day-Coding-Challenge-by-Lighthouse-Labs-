// ./functions/getSortedShipCoords.js
const GRID = require("./grid").GRID;
const filterGridBy = require("./filterGridBy").filterGridBy;

 /**
  * [Returns an array of string-coordinates of all ships ("v") in GRID]
  * @return {[String]} [An array with string coordinates ("B3")]
  */
const getSortedShipCoords = () => {
  const ship = "v";
  let ship_coords = filterGridBy(ship)
  ship_coords = ship_coords.sort();
  
  return ship_coords;
};

module.exports = {
  getSortedShipCoords
};