const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const isRock = require("../functions/isRock").isRock;

describe("Day 7 Challenge: isRock()", () => {
  it("should, when given a coordinate ('D1'), return true or false if \
the cell contents of GRID is a rock ('^')", () => {
    assert.equal(isRock("D1"), true);
  });
  it("should return a Boolean as an output", () => {
    expect(isRock("D1")).to.be.boolean();
  });
  it("should return Boolean true for GRID coords with rocks ('^')", () => {
    expect(isRock("D1")).to.be.true;
  })
  it("should return Boolean false for GRID coords without rocks", () => {
    expect(isRock("A1")).to.be.false;
  });
});