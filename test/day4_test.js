const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const totalCells = require("../functions/totalCells").totalCells;

describe("Day 4 Challenge: totalCells()", () => {
  it("should be a function", () => {
    assert.isFunction(totalCells);
  });
  it("should return a truthy value", () => {
    assert.ok(totalCells());
  });
  it("should return 100 for the total # of cells in GRID", () => {
    assert.equal(totalCells(), 100);
  });
  it("should return a number as an output", () => {
    assert.isNumber(totalCells());
  });
});