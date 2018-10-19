// ./challenges/day18.js

// ## Challenge #18
// Ship captains are really starting to rely on you to plot their routes
// through your area. Your name is being sung in pubs and taverns up and down
// the coast. And this time, it's for the right reasons! The ship captains
// are starting to be curious about some of the cells in your grid, and what
// they want is to know how dangerous a particular cell is. They know if ones
// are safe, but sometimes, they are willing to accept a bit of danger so
// that they can get a faster delivery time.

// A cell is considered dangerous if there is a rock or a strong current in
// it. However, a cell with rocks in it would be 100% dangerous, while strong
// currents are only 50% dangerous. Write a function called howDangerous()
// that will take a cell in the format 'G7' and return a number value for how
// dangerous the cell is. (Example: howDangerous('E2') will return 50 where
// howDangerous('E3') will return 100.)
const countRows = require("../functions/countRows").countRows;
const countColumns = require("../functions/countColumns").countColumns;

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

const howDangerous = coord => {
  const countRows = () => GRID.length;
  const countColumns = () => GRID[0].length;
  const convertColumn = coord => {
    const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const coord_letter = coord[0].toUpperCase();
    const letter_index = letters.indexOf(coord_letter);
    const col_index = letter_index <= countColumns() - 1 ? letter_index : console.log(`Column ${coord_letter} is not a valid column in GRID!`);
    
    return col_index;
  };
  const convertRow = coord => {
    const row_num = coord.slice(1);
    const is_row_valid = row_num <= 10;
    const row_index = is_row_valid ? parseInt(row_num) - 1 : console.log(`Row index ${parseInt(row_num)} is an invalid row index of GRID`);
    
    return row_index;
  };
  const lightCell = coord  => {
    const row_index = convertRow(coord);
    const col_index = convertColumn(coord);
    const grid_cell = row_index < countRows() && col_index < countColumns() ? GRID[row_index][col_index] : undefined;
    
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
  let assess_danger;
  
  if (isRock(coord)) {
    assess_danger = 100;
  } else if (isCurrent(coord)) {
    assess_danger = 50;
  }
  
  return assess_danger;
};

console.log(howDangerous("E2"));