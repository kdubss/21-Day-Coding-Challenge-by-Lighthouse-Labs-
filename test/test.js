// ./test/test.js
const assert = require("chai").assert;
const expect = require("chai").expect;

const GRID = require("../functions/grid").GRID;
const countRows = require("../functions/countRows").countRows
const countColumns = require("../functions/countColumns").countColumns;
const gridSize = require("../functions/gridSize").gridSize;
const totalCells = require("../functions/totalCells").totalCells;
const convertColumn = require("../functions/convertColumn").convertColumn;
const convertRow = require("../functions/convertRow").convertRow;
const lightCell = require("../functions/lightCell").lightCell;
const isRock = require("../functions/isRock").isRock;

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
it("convertColumn(), when given a coordinate ('C4'), should return the number of the column in GRID", () => {
  assert(convertColumn("C4"), 2);
});

// convertRow function
it("convertRow(), when given a coordinate ('B10'), should return the number of the row in GRID", () => {
  assert(convertRow("B10"), 9);
});

// lightCell function
it("lightCell(), when given a coordinate ('C2'), should return the contents of GRID for that coordinate if both the row index && the col index is < 10 ('v' for coordinate 'C2').", () => {
  assert(lightCell("C2"), "v");
});

// isRock function
it("isRock(), when given a coordinate ('D1'), should return true or false if the cell contents of GRID is a rock ('^')", () => {
  assert(isRock("D1"), true);
});