const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const gridSize = require("../functions/gridSize").gridSize;

describe("Day 3 Challenge: gridSize()", () => {
  it("should be a function", () => {
    assert.isFunction(gridSize);
  });
  it("should return a truthy value", () => {
    assert.ok(gridSize());
  });
  it("should return '10 x 10' (rows x columns) for the size of GRID", () => {
    assert.equal(gridSize(), "10 x 10");
  });
  it("should return a string as an ouput", () => {
    assert.isString(gridSize());
  });
})