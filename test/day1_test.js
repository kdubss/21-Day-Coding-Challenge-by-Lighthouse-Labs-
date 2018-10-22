// ./test/day1_test.js
const chai = require("chai");
const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should;

const GRID = require("../functions/grid").GRID;
const countRows = require("../functions/countRows").countRows;

describe("Day 1 Challenge: countRows()", () => {
  it("should be a function", () => {
    assert.isFunction(countRows);
  });
  it("should return a truthy value", () => {
    assert.ok(countRows());
  })
  it("should return the no. rows in the array for GRID", () => {
    assert.equal(countRows(), 10);
  });
  it("should return a number as an output", () => {
    assert.isNumber(countRows());
  });
});
