// ./day2.js

// Now that we know how many rows our GRID area has, 
// let's find out the number of columns. My sources at the
// Lighthouse9000™ company tell me that this shouldn't be too hard, but
// that you shouldn't overthink it.

// Write a function called countColumns() that will tell us the number
// of columns in our GRID. Again, remember that this has to work for all
// the lighthouse operators out there, no matter what size their are is.
// Also, your code will still be able to see the GRID variable, and you
// won't need to pass it as an argument to the function.

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
    
const countColumns = () => GRID[0].length;

// Testing:
console.log(countColumns());