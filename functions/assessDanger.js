// ./functions/assessDanger.js
const GRID = require("./grid").GRID;
const isRock = require("./isRock").isRock;
const isCurrent = require("./isCurrent").isCurrent;

/**
 * [assessDanger assess the danger of a GRID cell]
 * @param  {[String]} coord [GRID coordinate ("E2")]
 * @return {[Integer]}       [Number assessing how dangerous a GRID cell is]
 */
const assessDanger = coord => {
  let assess_danger;
  
  if (isRock(coord)) {
    assess_danger = 100;
  } else if (isCurrent(coord)) {
    assess_danger = 50;
  } else {
    assess_danger = 0;
  }
  
  return assess_danger;
};

module.exports = {
  assessDanger
};