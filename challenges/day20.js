// ./challenges/day20.js

// ## Challenge #20
// Lighthouse HQ also wants a report of the safety of your GRID. Write another
// function called `safetyReport()` which will return your GRID with all of the
// values replaced by the percentage for how dangerous they are. The
// percentages for how dangerous a cell is were established in question #18.
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

const safetyReport = () => {
  const grid = [];
  
  for (let row = 0; row < GRID.length; row++) {
    grid[row] = []
    for (let col = 0; col < GRID[0].length; col++) {
      if (GRID[row][col] === "^") {
        grid[row].push("100");
      } else if (GRID[row][col] === "~") {
        grid[row].push("50");
      } else if (GRID[row][col] === "") {
        grid[row].push("0");
      }
    }
  }
  
  return grid;
};

console.log(safetyReport());