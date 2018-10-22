const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const convertColumn = require("../functions/convertColumn").convertColumn;
const convertRow = require("../functions/convertRow").convertRow;

describe("Day 5 Challenge: convertColumn()", () => {
  it("should be a function", () => {
    assert.isFunction(convertColumn);
  });
  it("should, when given a coordinate ('C4'), return the number of the \
column in GRID", () => {
    assert.equal(convertColumn("C4"), 2);
  });
  it("should return an integer-number as an output", () => {
    assert.isNumber(convertColumn("C4"));
  });
});

describe("Day 5 Challenge: convertRow()", () => {
  it("should, when given a coordinate ('B10'), return the number of the \
row in GRID", () => {
    assert.equal(convertRow("B10"), 9);
  });
  it("should return an integer-number as an output", () => {
    assert.isNumber(convertRow("B10"));
    expect(convertRow("B10")).to.equal(9)
  });
});