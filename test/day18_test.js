const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const howDangerous = require("../functions/howDangerous").howDangerous;
const assessDanger = require("../functions/assessDanger").assessDanger;

describe("Day 18 Challenge: howDangerous()", () => {
  it("should be defined", () => {
    assert.isDefined(howDangerous);
  });
  it("should be a function", () => {
    assert.isFunction(howDangerous);
  });
  it("should return an integer number", () => {
    assert.isNumber(howDangerous());
  });
});