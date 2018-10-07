// ./day6.js

// ## Challenge #7
// In the area where the lighthouse is watching, the grid, there are many
// rocks which ships would need to avoid. Rocks are indicated with the ^
// symbol on the grid.

// Write a function called isRock() which will take in a coordinate in
// the form of 'C7' and return a true or a false boolean value depending
// on whether there is a rock in that cell or not. (Example:
// isRock('D1'); would return true)

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
  const convertColumn = coordinate => {
    const cols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const coord_letter = coordinate[0].toLowerCase();
    const col_index = cols.indexOf(coord_letter);
    const col_number = col_index;
    
    return col_number;
  };
  const convertRow = coordinate => {
    const coord_num = coordinate.length === 3 ? 9 : coordinate[1] - 1;
    
    return coord_num;
  };
  const grid_row = convertRow(coord);
  const row_col = convertColumn(coord);
  
  return GRID[grid_row][row_col];
};


const isRock = (coord) => {
  const is_rock = lightCell(coord);
  const is_rock_bool = is_rock === "^" ? true : false;
  
  return is_rock_bool;
};

console.log(isRock("D1"));
console.log(isRock("B10"));
console.log(isRock("I4"));
console.log(isRock("I8"));
console.log(isRock("I9"));
console.log(isRock("I10"));