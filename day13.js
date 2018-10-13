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

const countRows = () => GRID.length;

const countColumns = () => GRID[0].length;

const convertRow = coordinate => {
  const row_num = coordinate.slice(1);
  const is_row_valid = row_num <= 10;
  const row_index = is_row_valid ? parseInt(row_num - 1) : console.log(`Row index ${parseInt(row_num)} is an invalid row index of GRID`);
  
  return row_index;
};

const convertColumn = coordinate => {
  const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const coord_letter = coordinate[0].toUpperCase();
  const letter_index = letters.indexOf(coord_letter);
  const col_index = letter_index <= countColumns() - 1 ? letter_index : console.log(`Column ${coord_letter} is not a valid column in GRID!`);
  
  return col_index;
};

const lightCell = coord => {
  const row_index = convertRow(coord);
  const column_index = convertColumn(coord);
  const grid_cell = row_index < countRows() && column_index < countColumns() ? GRID[row_index][column_index] : console.log("Invalid GRID coordinates");

  return grid_cell;
};

const isRock = coord => {
  const rock = "^";
  const is_rock = lightCell(coord) === rock;
  
  return is_rock;
};

const isCurrent = coord => {
  const current = "~";
  const is_current = lightCell(coord) === current;
  
  return is_current;
};

const allRocks = () => {
  const filtered_rocks_array = [];
  
  for (let row = 0; row < countRows(); row++) {
    for (let col = 0; col < countColumns(); col++) {
      if (isRock("abcdefghij".toUpperCase().charAt(col) + (row + 1).toString())) {
        filtered_rocks_array.push("abcdefghij".toUpperCase().charAt(col) + (row + 1).toString());
      }
    }
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
  
  return filtered_currents_array;
};

console.log(allRocks());
console.log(allCurrents());