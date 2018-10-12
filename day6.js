// ./day6.js

// ## Challenge #6
// Okay, let's get our lighthouse actually doing some work! As the
// lighthouse keeper, sometimes you'll need to shine the light directly
// on a particular cell in the grid, to alert passing ships to a danger
// there.
// 
// Your job is to write a function called lightCell() that takes in the
// coordinates in the form of 'A3' or 'J9' and returns the contents of
// that specific cell. (Ex: lightCell('B4'); would return "")

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

const lightCell = coord => {
  const convertColumn = (coordinate) => {
    const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const coord_letter = coordinate[0].toUpperCase();
    const col_index = letters.indexOf(coord_letter);
    
    return col_index;
  };
  const convertRow = coordinate => {
    const coord_num = coordinate.length === 3 ? 9 : coordinate[1] - 1;
    
    return coord_num;
  };
  const grid_row = convertRow(coord);
  const row_col = convertColumn(coord);
  
  return GRID[grid_row][row_col];
};