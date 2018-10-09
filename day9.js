// ./day9.js

// ## Challenge #9
// And last, but certainly not least, there are cells with ships in
// them! We need to be able to query any cell in our GRID area and find
// out if it is occupied by a ship.

// Write a function called isShip() which will take in a coordinate in
// the form of 'I9' and return a true or a false boolean value depending
// on whether there is a ship in that cell or not. (Example:
// isShip('B3') would return true)

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
    
const isShip = coordinate => {
  const convertColumn = coord => {
    const cols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const coord_letter = coord[0].toUpperCase();
    const col_index = cols.indexOf(coord_letter);
    
    return col_index;
  };
  const convertRow = coord => {
    const coord_num = coord.length === 3 ? 9 : coord[1] - 1;
    
    return coord_num
  };
  const lightCell = coord => {
    const grid_row = convertRow(coord);
    const row_col = convertColumn(coord);
    
    return GRID[grid_row][row_col];
  };
  const ship = "V";
  const is_ship = lightCell(coordinate).toUpperCase() === ship ? true : false;
  
  return is_ship;
};

console.log(isShip("B3"));