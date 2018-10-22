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
  const countRows = () => GRID.length;
  const countColumns = () => GRID[0].length;
  const convertRow = coord => {
    const row_num = coord.slice(1);
    const is_row_valid = row_num <= countRows();
    const row_index = is_row_valid ? parseInt(row_num) - 1 : undefined;
    
    return row_index;
  };
  const convertColumn = coord => {
    const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const coord_letter = coord[0].toUpperCase();
    const letter_index = letters.indexOf(coord_letter);
    const col_index = letter_index < countColumns() ? letter_index : undefined;
    
    return col_index;
  };
  const lightCell = coord => {
    const row_index = convertRow(coord);
    const col_index = convertColumn(coord);
    const grid_cell = row_index < countRows() && col_index < countColumns() ? GRID[row_index][col_index] : undefined;
    
    return grid_cell;
  };
  const isRock = coord => lightCell(coord) === "^";
  const isCurrent = coord => lightCell(coord) === "~";

  const grid = [];
  
  for (let row = 0; row < countRows(); row++) {
    grid[row] = [];
    for (let col = 0; col < countColumns(); col++) {
      const coord_letter = String.fromCharCode(col + 65);
      const coord_number = (row + 1).toString();
      const coord = coord_letter + coord_number;

      if (lightCell(coord) === "^") {
        grid[row].push(100);
      } else if (lightCell(coord) === "~") {
        grid[row].push(50);
      } else if (lightCell(coord) === "") {
        grid[row].push(0);
      }
    }
  }
  
  return grid;
};

console.log(safetyReport());