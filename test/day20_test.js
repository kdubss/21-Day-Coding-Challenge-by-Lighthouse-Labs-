const chai = require("chai");
const assert = chai.assert;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const safetyReport = require("../functions/safetyReport").safetyReport;

describe("Day 20 Challenge: safetyReport()", () => {
  it("should be defined", () => {
    assert.isDefined(safetyReport);
  });
  it("should be a function", () => {
    assert.isFunction(safetyReport);
  });
  it("should return an array", () => {
    assert.isArray(safetyReport());
  });
});