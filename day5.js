// ./day5.js

// Since our GRID is written in coordinates like A3 or D8, we need code
// that is going to be able to convert those coordinates to the numbers
// we need to fetch data out of the GRID array(s). All of the lighthouse
// operators have reported in and we know that their areas never go
// above Z.

// Let's build a function called convertColumn() which, when given the
// coordinate as an argument, will return the number of the column.

// For example, calling convertColumn('C4') should return 2 as the 'C'
// column is the third column, and since JavaScript arrays start at 0,
// that would make 2 the third column.

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
    
const convertColumn = (coordinate) => {
  // 1st row has 10 columns:
  // a, b, c, d, e, f, g, h, i, j
  // So, the letter should be associated with the column number
  // where a --> column 1
  // _____ b --> column 2, etc.
  // 
  // 1. fetch the first letter of the coordinate string
  // 2. convert that letter to lowercase (i.e. standardized).
  // 3. Find out if the coordinate letter is in the array of letters in GRID
  // 4. If so, then fetch the index position of that letter within the letters array. (can use the IndexOf function in JS).
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const coord_letter = coordinate[0].toLowerCase();
  const col_index = letters.indexOf(coord_letter);
  const col_number = col_index + 1;
  
  return col_number;
};
    
console.log(convertColumn("A4"));