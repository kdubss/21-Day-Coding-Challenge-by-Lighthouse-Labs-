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
const isCurrent = require("../functions/isCurrent").isCurrent;
const isShip = require("../functions/isShip").isShip;
const lightRow = require("../functions/lightRow").lightRow;
const lightColumn = require("../functions/lightColumn").lightColumn;
const allRocks = require("../functions/allRocks").allRocks;
const allCurrents = require("../functions/allCurrents").allCurrents;
const allShips = require("../functions/allShips").allShips;

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

// isCurrent function
it("isCurrent(), when given a coordinate ('E2'), should return true or false if the cell contents of GRID is a current ('~')", () => {
  assert(isCurrent("E2"), true);
});

// isShip function
it("isShip(), when given a coordiante ('B3'), should return true or false if the cell contents of GRID is a ship ('V')", () => {
  assert(isShip("B3"), true);
})

// lightRow function
it("lightRow(), when given a row number ('1'), should return the entire contents of the corresponding GRID row (i.e. the array associated with that row in GRID)", () => {
  assert(lightRow(2), ["", "", "v", "", "~", "", "", "", "", ""])
});

// lightColumn function
it("lightColumn(), when given a column letter ('C'), should return an array of elements corresponding to that column in GRID", () => {
  assert(lightColumn("C"), ["", "v", "", "", "", "", "", "~", "", ""])
});

// allRocks function
it("allRocks(), when called, should return an array of coordinates of all GRID cells that contain rocks ('^')", () => {
  assert(allRocks(), ["D1", "E3", "F3", "E4", "F4", "B8", "H8", "B9", "B10"]);
});

// allCurrents function
it("allCurrents(), when called, should return an array of coordinates of all GRID cells that contain currents ('~')", () => {
  assert(allCurrents(), ["E2", "C8", "D8", "D9", "E10", "F10"]);
});

// allShips function
it("allShips(), when called, should return an array of coordinates of all GRID cdells that contain ships ('v')", () => {
  assert(allShips(), ["C2", "B3", "I5"]);
});