const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const filterGridBy = require("../functions/filterGridBy").filterGridBy;
const firstRock = require("../functions/firstRock").firstRock;

describe("Day 15 Challenge: filterGridBy()", () => {
  it("should be defined", () => {
    assert.isDefined(filterGridBy);
  });
  it("should be a function", () => {
    assert.isFunction(filterGridBy);
  });
  it("should return an array as output", () => {
    assert.isArray(filterGridBy());
  });
});

describe("Day 15 Challenge: firstRock()", () => {
  it("should be defined", () => {
    assert.isDefined(firstRock);
  });
  it("should be a function", () => {
    assert.isFunction(firstRock);
  })
  it("should return a String as output", () => {
    assert.isString(firstRock());
  });
  it("should return a String value of 'D1' as the result", () => {
    expect(firstRock()).to.equal("D1");
  });
  it("should return a String value with length of 2", () => {
    assert.lengthOf(firstRock(), 2);
  });
});