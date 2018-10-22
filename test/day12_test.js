const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const allRocks = require("../functions/allRocks").allRocks;

describe("Day 12 Challenge: allRocks()", () => {
  it("should, when called, return an array of coordinates of all GRID\
cells that contain rocks ('^')", () => {
    expect(allRocks()).to.eql(["D1", "E3", "F3", "E4", "F4", "B8", "H8", "B9", 
    "B10"]);
  });
});