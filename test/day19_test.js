const chai = require("chai");
const assert = chai.assert;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const getPercentageOfInGrid = require("../functions/getPercentageOfInGrid").getPercentageOfInGrid;
const percentageReport = require("../functions/percentageReport").percentageReport;

describe("Day 19 Challenge: getPercentageOfInGrid()", () => {
  it("should be defined", () => {
    assert.isDefined(getPercentageOfInGrid);
  });
  it("should be a typeof function", () => {
    assert.isFunction(getPercentageOfInGrid);
  });
  it("should return a floating-point number string (i.e. 2.00)", () => {
    assert.isString(getPercentageOfInGrid());
  });
});

describe("Day 19 Challenge: percentageReport()", () => {
  it("should be defined", () => {
    assert.isDefined(percentageReport);
  });
  it("should be a function", () => {
    assert.isFunction(percentageReport);
  });
  it("should return an array of floats", () => {
    assert.isArray(percentageReport());
  });
  it("should return an array of length 2", () => {
    assert.lengthOf(percentageReport(), 2);
  });
  it("should return an array [9.00, 7.00]", () => {
    assert.equal(percentageReport(), [9.00.toFixed(2), 7.00.toFixed(2)]);
  })
});