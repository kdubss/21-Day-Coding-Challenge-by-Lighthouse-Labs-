// ./functions/allCurrents.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;
const isCurrent = require("./isCurrent").isCurrent;

const allCurrents = () => {
  const filtered_currents_array = [];
  
  for (let row = 0; row < countRows(); row++) {
    for (let col = 0; col < countColumns(); col++) {
      if (isCurrent("abcdefghij".toUpperCase().charAt(col) + (row + 1).toString())) {
        filtered_currents_array.push(
          "abcdefghij".toUpperCase().charAt(col) + (row + 1).toString()
        );
      }
    }
  }
  
  return filtered_currents_array;
};

console.log(allCurrents());

module.exports = {
  allCurrents
};