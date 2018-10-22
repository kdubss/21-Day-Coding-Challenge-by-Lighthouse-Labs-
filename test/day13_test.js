const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const allCurrents = require("../functions/allCurrents").allCurrents;

describe("Day 13 Challenge: allCurrents()", () => {
  it("should, when called, return an array of coordinates of all GRID cells \
that contain currents ('~')", () => {
    expect(allCurrents()).to.eql(["E2", "C8", "D8", "D9", "E9", "E10", "F10"]);
  });
});