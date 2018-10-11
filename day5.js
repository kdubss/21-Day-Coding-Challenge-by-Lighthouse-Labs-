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
  const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const coord_letter = coordinate[0].toUpperCase();
  const col_index = letters.indexOf(coord_letter);
  
  return col_index;
};
    
console.log(convertColumn("j4"));