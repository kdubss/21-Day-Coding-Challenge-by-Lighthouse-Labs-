// ./challenges/day14.js

// ## Challenge #14
// While we are reporting on things, let's make a report for all of the
// ships in our area. This one is for Transport Canada, as they are the
// ones watching all the movements of ships.

// Write a function called allShips() which, when called, will return an
// array of the coordinates of all the ships in your grid.

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

const allShips = () => {
  const countRows = () => GRID.length;
  const countColumns = () => GRID[0].length;
  const all_ships_arr = [];
  const ship = "v";
  
  for (let row = 0; row < countRows(); row++) {
    for (let col = 0; col < countColumns(); col++) {
      if (GRID[row][col] === ship) {
        const coord = "abcdefghijklmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString();
        all_ships_arr.push(coord);
      }
    }
  }
  
  return all_ships_arr;
};

console.log(allShips());
