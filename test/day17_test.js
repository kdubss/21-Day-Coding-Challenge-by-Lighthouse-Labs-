const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

const GRID = require("../functions/grid").GRID;
const shipReport = require("../functions/shipReport").shipReport;
const getSortedShipCoords = require("../functions/getSortedShipCoords").getSortedShipCoords;

describe("Day 17 Challenge: shipReport()", () => {
  it("should return an array as an output type", () => {
    expect(shipReport()).to.be.an("array");
  });
  it("should return a sorted array of the the first and last ship \
coordinates within GRID ('B3', 'I5')", () => {
    expect(shipReport()).to.eql(['B3', 'I5']);
  });
});

describe("Day 17 Challenge: getSortedShipCoords()", () => {
  it("should return a type array as output", () => {
    expect(getSortedShipCoords()).to.be.an("array");
  });
  it("should return an array with GRID elements corresponding to ships - \
'v', but sorted in alphabetical order", () => {
    expect(getSortedShipCoords()).to.eql(["B3", "C2", "I5"]);
  });
})