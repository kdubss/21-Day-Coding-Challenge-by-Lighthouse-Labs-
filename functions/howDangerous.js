// ./functions/howDangerous.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const isRock = require("./isRock").isRock;
const isCurrent = require("./isCurrent").isCurrent;
const assessDanger = require("./assessDanger").assessDanger;

/**
 * [howDangerous assess the dangers of coord-cells in GRID]
 * @param  {[String]} coord [GRID coordinate ("E2")]
 * @return {[Integer]}       [Number assessing the danger of a GRID's cell]
 */
const howDangerous = coord => {
  const danger = assessDanger(coord);
  
  return danger;
};

console.log(howDangerous("E1"));

module.exports = {
  howDangerous
};