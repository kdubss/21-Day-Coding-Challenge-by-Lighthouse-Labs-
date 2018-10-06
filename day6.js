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
  // Function to return the column number
  const convertColumn = coordinate => {
    const cols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const coord_letter = coordinate[0].toLowerCase();
    const col_index = cols.indexOf(coord_letter);
    const col_number = col_index;
    
    return col_number;
  };
  // Function to return the row number:
  const convertRow = coordinate => {
    let coord_num;
    if (coordinate.length === 3) {
      coord_num = 9;
    } else {
      coord_num = coordinate[1] - 1
    }
    
    return coord_num;
  };
  const grid_row = convertRow(coord);
  const grid_col = convertColumn(coord);
  
  return GRID[grid_row][grid_col];
};

console.log(lightCell("B10"));