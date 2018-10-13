// ## Challenge #13
// Environment Canada has called and wants a report sent to them of all
// the rocks and currents in your grid, for use in their latest map.

// Write a function called allRocks() which when called will return an
// array of the coordinates of all the rocks in your grid. (Example:
// allRocks() should return ['D1', 'E3', 'F3', 'E4', 'F4', 'B8', 'H8',
// 'B9', 'B10'])

// Write a function called allCurrents() which, when called, will return
//  an array of the coordinates of all the strong currents in your grid.
// (Example: allCurrents() should return ['E2', 'C8', 'D8', 'D9', 'E9',
// 'E10', 'F10'])

// For challenge:
// - must loop through all rows and all columns of GRID
// - As looping through each cell, 

const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;

const allRocks = () => {
  const filtered_rocks_array = [];
  
  for (let row = 0; row < countRows; row++) {
    filtered_rocks_array.push(GRID[row].filter((col, ind) => {
      return col === "^";
    }));
  }
  
  return filtered_rocks_array;
};

const allCurrents = () => {
  const filtered_currents_array = [];
  
  for (let row = 0; row < countRows(); row++) {
    for (let col = 0; col < countColumns(); col++) {
      if (isCurrent("abcdefghij".toUpperCase().charAt(col) + (row + 1).toString())) {
        filtered_currents_array.push("abcdefghij".toUpperCase().charAt(col) + (row + 1).toString());
      }
    }
  }
};

console.log(allCurrents());