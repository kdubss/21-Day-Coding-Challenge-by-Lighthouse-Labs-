// ./functions/safetyReport.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;

/**
 * [safetyReport returns a grid with danger %-tages in grid cells]
 * @return {[Array]} [10 x 10 Array]
 */
const safetyReport = () => {
  const grid = []
  
  for (let row = 0; row < countRows(); row++) {
    grid[row] = [];
    for (let col = 0; col < countColumns(); col++) {
      
      if (GRID[row][col] === "^") {
        grid[row].push("100");
      } else if (GRID[row][col] === "~") {
        grid[row].push("50");
      } else if (GRID[row][col] === "") {
        grid[row].push("0");
      }
      
    }
  }
  
  return grid;
};

module.exports = {
  safetyReport
};