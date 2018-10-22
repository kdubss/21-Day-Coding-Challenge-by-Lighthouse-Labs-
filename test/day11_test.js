const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const lightColumn = require("../functions/lightColumn").lightColumn;

describe("Day 11 Challenge: lightColumn()", () => {
  it("should, when given a column letter ('C'), return an array of elements \
corresponding to that column in GRID", () => {
    expect(lightColumn("C")).to.eql(["", "v", "", "", "", "", "", "~", "", ""]);
  });
});