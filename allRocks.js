// ./allRocks.js
// Write a function called allRocks() which when called will return an
// array of the coordinates of all the rocks in your grid. (Example:
// allRocks() should return ['D1', 'E3', 'F3', 'E4', 'F4', 'B8', 'H8',
// 'B9', 'B10'])
const GRID = require("./grid.js").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns
const isRock = require("./isRock").isRock;

const allRocks = () => {
  const filtered_rocks_array = [];
  
  for (let row = 0; row < countRows(); row++) {
    for (let col = 0; col < countColumns(); col++) {
      if (isRock("abcdefghij".toUpperCase().charAt(col) + (row + 1).toString())) {
        filtered_rocks_array.push(
          "abcdefghij".toUpperCase().charAt(col) + (row + 1).toString()
        );
      }
    }
  }
  
  return filtered_rocks_array;
};

module.exports = {
  allRocks
};