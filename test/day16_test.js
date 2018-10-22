const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const firstCurrent = require("../functions/firstCurrent").firstCurrent;

describe("Day 16 Challenge: firstCurrent()", () => {
  it("should return a string as output", () => {
    expect(firstCurrent()).to.be.a("string");
  });
  it("should return 'E2' as the GRID coordinate of the first current", () => {
    assert.equal(firstCurrent(), "E2");
  });
});