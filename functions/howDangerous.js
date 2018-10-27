// ./functions/howDangerous.js
const GRID = require("./grid").GRID;
const assessDanger = require("./assessDanger").assessDanger;

/**
 * [howDangerous assess the dangers of coord-cells in GRID]
 * @param  {[String]} coord [GRID coordinate ("E2")]
 * @return {[Integer]}       [Number assessing the danger of a GRID's cell]
 */
const howDangerous = coord => assessDanger(coord);

module.exports = {
  howDangerous
};