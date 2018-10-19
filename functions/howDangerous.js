// ./functions/howDangerous.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const isRock = require("./isRock").isRock;
const isCurrent = require("./isCurrent").isCurrent;

/**
 * [howDangerous assess the dangers of coord-cells in GRID]
 * @param  {[String]} coord [GRID coordinate ("E2")]
 * @return {[Integer]}       [Number assessing the danger of a GRID's cell]
 */
const howDangerous = coord => {
  let assess_danger;
  
  if (isRock(coord)) {
    assess_danger = 100;
  } else if (isCurrent(coord)) {
    assess_danger = 50;
  }
  
  return assess_danger;
};

module.exports = {
  howDangerous
};