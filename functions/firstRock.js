// ./functions/firstRock.js
const GRID = require("./grid").GRID;
const countRows = require("./countRows").countRows;
const countColumns = require("./countColumns").countColumns;

const filterGrid = (filter_by) => {
  const filtered_grid = [];
  
  for (let row = 0; row < countRows(); row++) {
    filtered_grid.push(GRID[row].filter(by => {
      return by === filter_by;
    }));
  }
  
  return filtered_grid;
};

const getFirstRockInEachRow = () => {
  const first_rock_col_no = [];
  
  for (let row = 0; row < countRows(); row++) {
    if (GRID[row].indexOf("^") !== -1) {
      const rock_col_no = GRID[row].indexOf("^") + 1;
      first_rock_col_no.push(rock_col_no);
    }
  }
  
  return first_rock_col_no;
};

const firstRock = () => {
  return "First Rock!";
};

module.exports = {
  getFirstRockInEachRow,
  firstRock
};

console.log(getFirstRockInEachRow());