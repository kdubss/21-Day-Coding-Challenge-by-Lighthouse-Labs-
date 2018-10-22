const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const allShips = require("../functions/allShips").allShips;

describe("Day 14 Challenge: allShips()", () => {
  it("should, when called, return an array of coordinates of all GRID cdells \
that contain ships ('v')", () => {
    expect(allShips()).to.eql(["C2", "B3", "I5"]);
  });
});