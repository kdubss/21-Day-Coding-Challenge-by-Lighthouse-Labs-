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
  const convertColumn = coordinate => {
    const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const coord_letter = coordinate[0].toUpperCase();
    const col_index = letters.indexOf(coord_letter);
    
    return col_index;
  };
  const col_index = convertColumn(col_letter)
  const col_array = [];
  
  for (let row = 0; row < GRID.length; row++) {
    col_array.push(GRID[row][col_index]);
  }
  
  return col_array;
};

console.log(lightColumn("C"));