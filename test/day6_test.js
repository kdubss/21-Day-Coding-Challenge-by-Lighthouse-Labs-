const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const lightCell = require("../functions/lightCell").lightCell;

describe("Day 6 Challenge: lightCell()", () => {
  it("should, when given a coordinate ('C2'), return the contents of \
GRID for that coordinate if both the row index && the col index \
is < 10 ('v' for coordinate 'C2').", () => {
    assert.equal(lightCell("C2"), "v");
    assert.equal(lightCell("B3"), "v", "GRID coordinate 'B3' should \
equal 'v'.");
  });
  it("should return a string as an output", () => {
    assert.isString(lightCell("C2"));
    expect(lightCell("C2")).to.be.a("string");
  });
});