// ./functions/firstRock.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;

const firstRock = () => {
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

module.exports = {
  firstRock
};