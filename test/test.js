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

describe("Testing behavioural functionality of GRID dimension functions", () => {
  describe("countRows() & countColumns() functions (day1 & day2, respectively)", () => {
    it("should return the no. rows in the array for GRID", () => {
      assert.equal(countRows(), 10);
    });
    it("should return the no. columns for each row, in the GRID array", () => {
      assert.equal(countColumns(), 10);
    });
  });
  
  describe("gridSize() & totalCells() functions (day3 & day4, respectively)", () => {
    it("should return '10 x 10' (rows x columns) for the size of GRID", () => {
      assert.equal(gridSize(), "10 x 10");
    });
    it("should return 100 for the total # of cells in GRID", () => {
      assert.equal(totalCells(), 100);
    });
  });
});

describe("Testing behavioural functionality for converting GRID dimensions to \
JavaScipt GRID indices", () => {
  describe("convertColumn() & convertRow() functions (day5 & day6, \
respectively)", () => {
    it("should, when given a coordinate ('C4'), return the number of the column in GRID", () => {
      assert.equal(convertColumn("C4"), 2);
    });
    it("convertRow(), when given a coordinate ('B10'), should return the number of the row in GRID", () => {
      assert.equal(convertRow("B10"), 9);
    });
  });
  
  describe("lightCell() function (day6)", () => {
    it("lightCell(), when given a coordinate ('C2'), should return the contents of GRID for that coordinate if both the row index && the col index is < 10 ('v' for coordinate 'C2').", () => {
      assert.equal(lightCell("C2"), "v");
    });
  });
});

describe("Testing behavioural functionality of functions identifying Challenge \
objects (i.e. rocks, currents, ships)", () => {
  describe("isRock(), isCurrent(), & isShip() functions (day7, day8, day9, \
respectively)", () => {
    it("should, when given a coordinate ('D1'), return true or false if the cell contents of GRID is a rock ('^')", () => {
      assert.equal(isRock("D1"), true);
    });
    it("should, when given a coordinate ('E2'), return true or false if the cell contents of GRID is a current ('~')", () => {
      assert.equal(isCurrent("E2"), true);
    });
    it("should, when given a coordinate ('B3'), return true or false if the cel contents of GRID is a ship ('v')", () => {
      assert.equal(isShip("B3"), true);
    });
  });
});

describe("Testing the behaioural functionality for functions returning rows, \
columns, and/or specific cells that meet certain criteria, \
(i.e. all rocks, etc.)", () => {
  describe("lightRow(), lightColumn(), lightCell(), allRocks(), allCurrents(), allShips() \
functions (day10, day11, day13, day13, day14, respectively)", () => {
    it("should, when given a row number ('1'), return the entire contents of the \
corresponding GRID row (i.e. the array associated with that row in GRID)", () => {
      assert(lightRow(2), ["", "", "v", "", "~", "", "", "", "", ""])
    });
    it("should, when given a column letter ('C'), return an array of elements \
corresponding to that column in GRID", () => {
      assert(lightColumn("C"), ["", "v", "", "", "", "", "", "~", "", ""])
    });
    it("should, when called, return an array of coordinates of all GRID \
cells that contain rocks ('^')", () => {
      assert(allRocks(), ["D1", "E3", "F3", "E4", "F4", "B8", "H8", "B9", 
      "B10"]);
    });
    it("should, when called, return an array of coordinates of all GRID cells \
that contain currents ('~')", () => {
      assert(allCurrents(), ["E2", "C8", "D8", "D9", "E10", "F10"]);
    });
    it("should, when called, return an array of coordinates of all GRID cdells \
that contain ships ('v')", () => {
      assert(allShips(), ["C2", "B3", "I5"]);
    });
  });
})