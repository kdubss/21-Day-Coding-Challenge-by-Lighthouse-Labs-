// ./challenges/day15.js

// ## Challenge #15
// Here is an opportunity to prove how powerful your Lighthouse-powering
// skills are! Write a function called firstRock() which will return the
// coordinates of the first rock in your grid. Consider how you might
// use one of your previously written functions to simplify your task!
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

const firstRock = () => {
  const countRows = () => GRID.length;
  const countColumns = () => GRID[0].length;
  
  const rock_coord = [];
  const rock = "^";

  for (let row = 0; row < countRows(); row++) {
    for (let col = 0; col < countColumns(); col++) {
      if (GRID[row][col] === rock) {
        const coord = "abcdefghijklmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString();
        rock_coord.push(coord);
      }
    }
  }

  const first_rock = rock_coord[0];
  return first_rock;
};

console.log(firstRock());