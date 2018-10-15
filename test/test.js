// ./test/test.js
const assert = require("chai").assert;
const GRID = require("../functions/grid").GRID;
const countRows = require("../functions/countRows").countRows
const countColumns = require("../functions/countColumns").countColumns;
const gridSize = require("../functions/gridSize").gridSize;
const totalCells = require("../functions/totalCells").totalCells;
const convertColumn = require("../functions/convertColumn").convertColumn;
const convertRow = require("../functions/convertRow");

// countRows() function
it("countRows() should return 10 as the length of GRID", () => {
  assert.equal(countRows(), 10);
});

// countColumns() function
it("countColumns() should return 10 for the length of each sub-array in GRID", () => {
  assert.equal(countColumns(), 10);
});

// gridSize() function
it("gridSize() should return '10 x 10' (rows x columns) for the size of GRID", () => {
  assert(gridSize(), "10 x 10");
});

// totalCells() function
it("totalCells() should return 100 for the total # of cells in GRID", () => {
  assert(totalCells(), 100);
});

// convertColumn function
it("convertColumn(), when given a coordinate, should return the number of the column in GRID", () => {
  assert(convertColumn("C4"), 2);
});

// convertRow function
it("convertRow(), when given a coordinate, should return the number of the row in GRID", () => {
  assert(convertRow("A1"), 0);
});