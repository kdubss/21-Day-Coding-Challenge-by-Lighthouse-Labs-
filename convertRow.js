// ./converRow.js

const convertRow = coord => coord[1].length === 3 ? 9 : coord[1] - 1;

console.log(convertRow("A1"));