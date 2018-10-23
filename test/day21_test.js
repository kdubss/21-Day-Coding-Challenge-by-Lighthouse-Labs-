const chai = require("chai");
const assert = chai.assert;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const calcDistance = require("../functions/calcDistance").calcDistance;
const getDistance4CellsOnSameColumn = require("../functions/calcDistance").getDistance4CellsOnSameColumn;

describe("Day 21 Challenge: calcDistance()", () => {
  it("should be defined", () =>  {
    assert.isDefined(calcDistance);
  });
  it("should be a function", () => {
    assert.isFunction(calcDistance);
  });
  it("should return 9 as a distance", () => {
    assert.equal(getDistance4CellsOnSameColumn("A1", "J1"), 9);
  })
});

describe("Day 21 Challenge: getDistance4CellsOnSameColumn()", () => {
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