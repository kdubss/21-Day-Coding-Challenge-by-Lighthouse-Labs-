// ./functions/firstRock.js
const GRID = require("./grid").GRID;
const filterGridBy = require("./filterGridBy").filterGridBy;

/**
 * [firstRock returns GRID coordinate of first rock instance]
 * @return {[String]} [String coordinate ("D1") of GRID corresponding to first rock]
 */
const firstRock = () => {
  const rock = "^";
  const rock_coords = filterGridBy(rock);
  const first_rock = rock_coords[0];
  
  return first_rock;
};

module.exports = {
  firstRock
};