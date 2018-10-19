// ./functions/convertColumn.js
const GRID = require("./grid").GRID;
const countColumns = require("./countColumns").countColumns;

/**
 * [convertColumn description]
 * @param  {[String]} coordinate [Column & Row of GRID cell ("A1")]
 * @return {[Number - Integer]} [The col no - 1, specified by coordinate input]
 */
const convertColumn = coordinate => {
  const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const coord_letter = coordinate[0].toUpperCase();
  const letter_index = letters.indexOf(coord_letter);
  const col_index = letter_index <= countColumns() - 1 ? letter_index : console.log(`Column ${coord_letter} is not a valid column in GRID!`);
  
  return col_index;
};

module.exports = {
  convertColumn
};