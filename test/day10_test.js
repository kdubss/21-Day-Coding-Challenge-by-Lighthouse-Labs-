const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const lightRow = require("../functions/lightRow").lightRow;

describe("Day 10 Challenge: lightRow()", () => {
  it("should, when given a row number ('1'), return the entire contents of the \
corresponding GRID row (i.e. the array associated with that row in GRID)", () => {
    expect(lightRow(2)).to.eql(["", "", "v", "", "~", "", "", "", "", ""]);
  });
});