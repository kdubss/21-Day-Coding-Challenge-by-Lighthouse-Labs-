const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const isShip = require("../functions/isShip").isShip;

describe("Day 9 Challenge: isShip()", () => {
  it("should, when given a coordinate ('B3'), return true or false if \
the cell contents of GRID is a ship ('v')", () => {
    assert.equal(isShip("B3"), true);
  });
});