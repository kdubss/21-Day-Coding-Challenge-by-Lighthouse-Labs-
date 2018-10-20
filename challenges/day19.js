// ./challenges/day19.js

// ## Challenge #19
// It's time for monthly reporting to Lighthouse HQ. Your supervisor calls you
// and tells you that they need a report of what percentage of your grid is
// rocks and what percentage has strong currents. This data should be sent as
// an array of two number values, in that specific order.

// Write a function percentageReport() that returns the right percentages.
// (Example: calling percentageReport() should return the following array:
// [9.00, 7.00], as 9% of your GRID is rocks, and 7% is currents.) Your grid
// produces nice easy integers. However, not all grids will. Just to be certain,
// make sure your results always return 2 decimal places. This will really help
// ALL the Lighthouse9000™ operators.
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

const percentageReport = () => {
  const countRows = () => GRID.length;
  const countColumns = () => GRID[0].length;
  const totalCells = () => countColumns() * countRows();
  const filterGridBy = (fltr_by) => {
    const filtered_array = [];
    
    for (let row = 0; row < countRows(); row++) {
      for (let col = 0; col < countColumns(); col++) {
        if (GRID[row][col] === fltr_by) {
          const coord = "abcdefghijklmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString();
          filtered_array.push(coord);
        }
      }
    }
    
    return filtered_array;
  }
  const rock = "^";
  const current = "~";
  const total_cells = totalCells();
  const all_rocks = filterGridBy(rock);
  const all_currents = filterGridBy(current);
  const proportion_of_rocks = ((all_rocks.length / total_cells) * 100).toFixed(2);
  const proportion_of_currents = ((all_currents.length / total_cells) * 100).toFixed(2);
  
  return [proportion_of_rocks, proportion_of_currents];
};

console.log(percentageReport());

module.exports = {
  percentageReport
};