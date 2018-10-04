//  ./day1.js

// As a lighthouse operator, your job is to both watch out for dangers
// in your area, such as rocks and strong currents, but also to be the
// knowledge expert for your area of the ocean. With this in mind, let's
// start using our coding skills to get some information about our GRID
// area. For starters, let's find out how many rows there are in our
// GRID.

// Up above you have access to the printed-out grid, and the JS code for
// the grid. This is your grid, for your lighthouse.

// Write a function called countRows() which will tell us the number of
// rows in our GRID. Remember that other lighthouse operators are going
// to be using this function, so it has to be able to work on a GRID of
// many size. It would be easy to write a function that just did return
// 12; but that wouldn't help operators with bigger or smaller areas!

// You do NOT need to pass the GRID variable to the countRows()
// function, as it will be able to access it.

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
    
console.log(GRID);

const countRows = () => GRID.length;