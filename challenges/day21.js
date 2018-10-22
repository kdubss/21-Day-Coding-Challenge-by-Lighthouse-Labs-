// ./challenges/day21.js

// ## Challenge #21
// Ship captains have heard of your prowess and want to know the length of
// their routes through your grid.

// Write a function called calcDistance() which will take two coordinates in
// the form of 'A3' and calculate the distance between the two points.

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

const calcDistance = (coord1, coord2) => {
  const getGridRowFromCoord = coord => {
    const row_num = coord.slice(1);
    const row_index = row_num < GRID.length ? parseInt(row_num) - 1 : undefined
    
    return row_index;
  };
  const getGridColumnFromCoord = coord => {
    const grid_columns = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const coord_letter = coord[0].toUpperCase();
    const letter_index = grid_columns.indexOf(coord_letter);
    const col_index = letter_index < GRID[0].length ? letter_index : undefined;
    
    return col_index;
  };
  
  // Calculating distance logic:
  // 1. both coordinates on same row (i.e. different columns): 
  // 2. both coordinates on same column (i.e. different rows):
  // 3. coordintes on different rows and columns:
  
  // Case 1: Both coords on same row (different columns):
  //  - calculate the length between the different columns:
  //  - i.e. figuring out the difference between GRID column coords (and calculating the absolute value of that difference)
  const getDistance4CellsOnSameRow = (coord1, coord2) => {
    const c1_col_index = getGridColumnFromCoord(coord1);
    const c2_col_index = getGridColumnFromCoord(coord2);
    const distance = c1_col_index > c2_col_index ? c1_col_index - c2_col_index : c2_col_index - c1_col_index
    
    return distance;
  };
  
  // Case 2: Both coords on same column (different rows):
  //  - calculate the length between the different row coorddinates
  //  - i.e. figuring out the difference between GRID row coords (and calculating the absolute value of that difference)
  const getDistance4CellsOnSameColumn = (coord1, coord2) => {
    const c1_row_index = getGridRowFromCoord(coord1);
    const c2_row_index = getGridRowFromCoord(coord2);
    const distance = c1_row_index > c2_row_index ? c1_row_index - c2_row_index : c2_row_index - c1_row_index;
    
    return distance;
  };
  
  // Case 3: Both coords on different row AND column:
  //  - Essentially calculating the hypotenuse via. the pythagorean theorem
  //  - i.e. 
  
  return getDistance4CellsOnSameColumn(coord1, coord2);
};

console.log(calcDistance("D5", "D1"));