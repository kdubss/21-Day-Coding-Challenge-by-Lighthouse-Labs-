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

const GRID = [
      ["", "", "", "^", "", "", "", "", "", ""],
      ["", "", "v", "", "~", "", "", "", "", ""],
      ["", "v", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "v", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "^", "~", "~", "", "", "", "^", "", ""],
      ["", "^", "", "~", "~", "", "", "", "", ""],
      ["", "^", "", "", "~", "~", "", "", "", ""],
    ];
    
const allRocksTest = () => {
  const countRows = () => GRID.length;
  const countColumns = () => GRID[0].length;
  
  const all_rocks_arr = [];
  const rock = "^";
  for (row = 0; row < countRows(); row++) {
    for (col = 0; col < countColumns(); col++) {
      if (GRID[row][col] === rock) {
        const coord = "abcdefghijklmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString()
        all_rocks_arr.push(coord)
      }
    }
  }
  
  return all_rocks_arr;
};

const allCurrentsTest = () => {
  const countRows = () => GRID.length;
  const countColumns = () => GRID[0].length;
  
  const all_currents_arr = [];
  const current = "~"
  for (row = 0; row < countRows(); row++) {
    for (col = 0; col < countColumns(); col++) {
      if (GRID[row][col] === current) {
        const coord = "abcdefghijklmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString()
        all_currents_arr.push(coord)
      }
    }
  }
  
  return all_currents_arr;
}

console.log(allCurrentsTest());
console.log(allRocksTest());