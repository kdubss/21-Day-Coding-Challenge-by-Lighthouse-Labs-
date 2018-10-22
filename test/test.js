// ./test/test.js
const chai = require("chai");
const assert = require("chai").assert;
const expect = require("chai").expect;
const asserttype = require("chai-asserttype");
const chaiParam = require("chai-param");

chai.use(asserttype);
chai.use(chaiParam);

const param = chaiParam.param;
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
const firstRock = require("../functions/firstRock").firstRock;
const firstCurrent = require("../functions/firstCurrent").firstCurrent;
const getSortedShipCoords = require("../functions/getSortedShipCoords").getSortedShipCoords;
const shipReport = require("../functions/shipReport").shipReport;
const filterGridBy = require("../functions/filterGridBy").filterGridBy;
const getPercentageOfInGrid = require("../functions/getPercentageOfInGrid").getPercentageOfInGrid;
const percentageReport = require("../functions/percentageReport").percentageReport;
const getDistance4CellsOnSameRow = require("../functions/calcDistance").getDistance4CellsOnSameRow;
const getDistance4CellsOnSameColumn = require("../functions/calcDistance").getDistance4CellsOnSameColumn;

describe("Testing behavioural functionality of day 19 challenge", () => {
  describe("getPercentageOfInGrid() function", () => {
    const getPercentageOfInGrid = (of_what) => {
      const proportion_of = (filterGridBy(of_what).length / totalCells()) * 100;
      const percentage_of = proportion_of.toFixed(2);
      
      return percentage_of;
    };
    it("should be defined", () => {
      assert.isDefined(getPercentageOfInGrid);
    });
    it("should be a typeof function", () => {
      assert.isFunction(getPercentageOfInGrid);
    });
    it("should return a floating-point number string (i.e. 2.00)", () => {
      assert.isString(getPercentageOfInGrid());
    });
  });
  describe("percentageReport() function", () => {
    const percentageReport = () => {

    };
    it("should be defined", () => {
      assert.isDefined(percentageReport);
    });
    it("should be a function", () => {
      assert.isFunction(percentageReport);
    });
    it("should return an array of floats", () => {
      assert.isArray(percentageReport());
    });
    it("should return an array of length 2", () => {
      assert.lengthOf(percentageReport(), 2);
    });
    it("should return an array [9.00, 7.00]", () => {
      assert.equal(percentageReport(), [9.00.toFixed(2), 7.00.toFixed(2)]);
    })
  });
});

describe("Testing behavioural functionality of day 21 challenge", () => {
  describe("getDistance4CellsOnSameRow() functrion", () => {
    it("should be defined", () =>  {
      assert.isDefined(getDistance4CellsOnSameRow);
    });
    it("should be a function", () => {
      assert.isFunction(getDistance4CellsOnSameRow);
    });
    it("should return 9 as a distance", () => {
      assert.equal(getDistance4CellsOnSameRow("A1", "J1"), 9);
    })
  });
  
  describe("getDistance4CellsOnSameColumn() function", () => {
    it("should be defined", () => {
      assert.isDefined(getDistance4CellsOnSameColumn)
    });
    it("should be a function", () => {
      assert.isFunction(getDistance4CellsOnSameColumn);
    });
    it("should return 9 as a distance", () => {
      assert.equal(getDistance4CellsOnSameColumn("B1", "B10"), 9);
    });
  });
});