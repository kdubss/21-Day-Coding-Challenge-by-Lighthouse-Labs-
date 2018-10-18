// ./challenges/day17.js

// ## Challenge #17
// Transport Canada called back. They want something similar to what you
// did for firstRock() and firstCurrent() but they want both the first
// AND the last ship in your area.

// Write a function called shipReport() which does not take any
// parameters, but will return an array of the coordinates of the ship
// furthest to the west (left) and east (right) of your GRID. (Example:
// shipReport() would return ['B3', 'I5'].)
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

const shipReport = () => {
  const countRows = () =>  GRID.length;
  const countColumns = () => GRID[0].length;
  const getSortedShipCoords = () => {
    let ship_coords = [];
    const ship = "v";
    
    for (let row = 0; row < countRows(); row++) {
      for (let col = 0; col < countColumns(); col ++) {
        if (GRID[row][col] === ship) {
          const coord = "abcdefghijklmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString();
          ship_coords.push(coord);
        }
      }
    }
    
    ship_coords = ship_coords.sort();
    
    return ship_coords;
  };
  
  const sorted_ship_coords = getSortedShipCoords();
  const first_and_last_ship = [
    sorted_ship_coords[0], 
    sorted_ship_coords[sorted_ship_coords.length - 1]
  ];
  
  return first_and_last_ship;
};

console.log(shipReport());