const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const countColumns = require("../functions/countColumns").countColumns;

describe("Day 2 Challenge: countColumns()", () => {
  it("should be a function", () => {
    assert.isFunction(countColumns);
  });
  it("should return a truthy value", () => {
    assert.ok(countColumns());
  });
  it("should return the no. columns for each row, in the GRID array", () => {
    assert.equal(countColumns(), 10);
  });
  it("should return a number as an output", () => {
    assert.isNumber(countColumns());
  })
});