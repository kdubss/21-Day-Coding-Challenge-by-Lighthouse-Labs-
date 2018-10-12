// ./day12.js
// 
// ## Challenge #12
// The weekend lighthouse operator isn't as smart as you are, and
// sometimes tells the Lighthouse9000™ system to do invalid things,
// causing the repairman to have to come out and fix the lighthouse.
// Upgrade the lightCell() method so that if an invalid cell is passed
// in, it returns false. (Example: lightCell('Z3'); would return false
// as would lightCell('A11');)
// 
// In essence,
//  a. GRID has 10 columns
//  b. GRID has 10 rows
//  c. INVALID --> col length > 10 --> returns false
//  d. INVALID --> row length > 10 --> returns false
// 
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
    
const lightCell = coordinate => {
  const convertColumn = coordinate => {
    const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const coord_letter = coordinate[0].toUpperCase();
    const col_index = letters.indexOf(coord_letter);
    const is_col_valid = col_index <= 9 ? true : false;
    
    return is_col_valid;
  };
  const convertRow = coordinate => {
    const coord_num = coordinate.slice(1);
    const is_row_valid = coord_num <= 10 ? true : false
    
    return is_row_valid;
  };
  const is_coord_valid = convertRow(coordinate) && convertColumn(coordinate)
  
  return is_coord_valid;
};

console.log(`\nIs coordinate Z3 valid: ${lightCell('Z3')}`);
console.log(`Is coordinate A11 valid: ${lightCell('A11')}`);
console.log(`\nIs coordinate A1 valid: ${lightCell('A1')}`);
console.log(`Is coordinate D10 valid: ${lightCell('D10')}`);