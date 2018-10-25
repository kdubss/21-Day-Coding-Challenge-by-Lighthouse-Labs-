const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const firstCurrent = require("../functions/firstCurrent").firstCurrent;
const filterGridBy = require("../functions/firstCurrent").firstCurrent;

describe("Day 16 Challenge: firstCurrent()", () => {
  it("should be defined", () => {
    assert.isDefined(firstCurrent);
  });
  it("should be a function", () => {
    assert.isFunction(firstCurrent);
  });
  it("should return a String as an output", () => {
    assert.isString(firstCurrent());
  });
  it("should return a String value with length of 2", () => {
    assert.lengthOf(firstCurrent(), 2);
  });
  it("should return a value of 'E2' as the GRID coord with the first current", () => {
    expect(firstCurrent()).to.equal("E2");
  });
});