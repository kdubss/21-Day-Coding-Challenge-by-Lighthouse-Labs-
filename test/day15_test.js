const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const firstRock = require("../functions/firstRock").firstRock;

describe("Day 15 Challenge: firstRock()", () => {
  it("should return an output of type String", () => {
    expect(firstRock()).to.be.string();
  });
  it("should return coordinate 'D1' as the instance of first rock", () => {
    expect(firstRock()).to.equal("D1");
  });
});