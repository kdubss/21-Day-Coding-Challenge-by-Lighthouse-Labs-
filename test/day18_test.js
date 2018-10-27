const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const howDangerous = require("../functions/howDangerous").howDangerous;
const assessDanger = require("../functions/assessDanger").assessDanger;

describe("Day 18 Chhallenge: howDangerous()", () => {
  it("should be defined", () => {
    assert.isDefined(howDangerous);
  });
  it("should be a function", () => {
    assert.isFunction(howDangerous);
  });
  it("should return a danger of 100 if input coord is a rock ('^')", () => {
    assert.equal(howDangerous("D1"), 100);
  });
  it("should return a danger of 50 if the input coord is a current ('~')", () => {
    assert.equal(howDangerous("E2"), 50);
  });
  it("should return a danger of 0 if the input coord is neither a rock ('^') or a current ('~')", () => {
    assert.equal(howDangerous("A1"), 0);
  });
});

describe("Day 18 Challenge: assessDanger()", () => {
  it("should be defined", () => {
    assert.isDefined(assessDanger);
  });
  it("should be a function", () => {
    assert.isFunction(assessDanger);
  });
  it("should return a value of 100 if the input coord yields a rock ('^')", () => {
    assert.equal(assessDanger("D1"), 100);
  });
  it("should return a value of 50 if the input coord yields a current ('~')", () => {
    assert.equal(assessDanger("E2"), 50);
  });
  it("should return a value of 0 if the input coord yields a non-rock/non-current", () => {
    assert.equal(assessDanger("A1"), 0);
  });
});