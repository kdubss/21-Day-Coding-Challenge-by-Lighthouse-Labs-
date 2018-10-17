// ./challenges/day16.js

// ## Challenge #16
// That was outstanding! Now do the same thing with firstCurrent().
// Don't reinvent the wheel here, re-use existing code. This is one of
// the most important skills you can build as a coder...er, uh, I mean
// Lighthouse operator.
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

const firstCurrent = () => {
  const currents_arr = [];
  const current = "~";
  const countRows = () => GRID.length;
  const countColumns = () => GRID[0].length;
  
  for (let row = 0; row < countRows(); row++) {
    for (let col = 0; col < countColumns(); col++) {
      if (GRID[row][col] === current) {
        const current_coord = "abcdefghikjlmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString();
        currents_arr.push(current_coord);
      }
    }
  }
  
  const first_current = currents_arr[0];
  
  return first_current;
};

console.log(firstCurrent());