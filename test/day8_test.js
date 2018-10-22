const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const isCurrent = require("../functions/isCurrent").isCurrent;

describe("Day 8 Challenge: isCurrent()", () => {
  it("should, when given a coordinate ('E2'), return true or false if \
the cell contents of GRID is a current ('~')", () => {
    assert.equal(isCurrent("E2"), true);
  });
  it("should return a Boolean as an output", () => {
    expect(isCurrent("E2")).to.be.boolean();
  });
  it("should return Boolean true for GRID coords containing \
currents ('~')", () => {
    expect(isCurrent("E2")).to.be.true;
  })
  it("should return Boolean false for GRID coords without currents", () => {
    expect(isCurrent("D4")).to.be.false;
  });{}
});