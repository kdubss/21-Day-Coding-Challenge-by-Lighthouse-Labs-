// ./convertColumn.js

const convertColumn = coordinate => {
  const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const coord_letter = coordinate[0].toUpperCase();
  const col_index = letters.indexOf(coord_letter);
  
  return col_index;
};

module.exports = {
  convertColumn
};