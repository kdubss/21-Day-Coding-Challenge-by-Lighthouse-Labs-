// ./day3.js

// ## Challenge #3
// Now that we can do rows and columns, let's find out how big the size
// of our GRID is. I checked in with the lead developer at a company I
// know of, and she told me that this is one of the areas where re-using
// code is a great idea.

// Write a function called gridSize() that will tell you the size of
// your grid in the format width x height. Your function should return a
// string, and in this example, your function should return the string
// '10 x 10'. But you have to make sure that you figure that string out
// by actually measuring your grid! Your code should make sure that it
// uses your countRows() and countColumns() functions that you've 

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
    
const gridSize = () => {
  const countRows = () => GRID.length;
  const countColumns = () => GRID[0].length;

  return `${countColumns()} x ${countRows()}`;
};

console.log(`Testing gridSize() function:\n${gridSize()}`);