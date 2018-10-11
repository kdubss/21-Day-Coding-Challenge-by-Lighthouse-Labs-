// ./day11.js

// ## Challenge #11
// Now that you can return the contents of the cells of a row, we also
// need to be able to return the cells of a column.

// Write a function called lightColumn() that takes in the letter of the
// column from the grid, and returns an array that is the contents of
// that grid column. (Ex: lightColumn('C'); would return ["", "", "",
// "", "", "", "", "~", "", ""])
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
    
const lightColumn = col_letter => {
  const row_columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const col_index = row_columns.indexOf(col_letter);
  const col_array = [];
  
  for (let row = 0; row < GRID.length; row++) {
    col_array.push(GRID[row][col_index]);
  }
  
  return col_array;
};

console.log(lightColumn("C"));