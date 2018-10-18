// ./test/test.js
const chai = require("chai");
const assert = require("chai").assert;
const expect = require("chai").expect;
const asserttype = require("chai-asserttype");

chai.use(asserttype);

const GRID = require("../functions/grid").GRID;
const countRows = require("../functions/countRows").countRows
const countColumns = require("../functions/countColumns").countColumns;
const gridSize = require("../functions/gridSize").gridSize;
const totalCells = require("../functions/totalCells").totalCells;
const convertColumn = require("../functions/convertColumn").convertColumn;
const convertRow = require("../functions/convertRow").convertRow;
const lightCell = require("../functions/lightCell").lightCell;
const isRock = require("../functions/isRock").isRock;
const isCurrent = require("../functions/isCurrent").isCurrent;
const isShip = require("../functions/isShip").isShip;
const lightRow = require("../functions/lightRow").lightRow;
const lightColumn = require("../functions/lightColumn").lightColumn;
const allRocks = require("../functions/allRocks").allRocks;
const allCurrents = require("../functions/allCurrents").allCurrents;
const allShips = require("../functions/allShips").allShips;
const firstRock = require("../functions/firstRock").firstRock;
const firstCurrent = require("../functions/firstCurrent").firstCurrent;
const getSortedShipCoords = require("../functions/getSortedShipCoords").getSortedShipCoords;

describe("Testing GRID array", () => {
  it("GRID should be of type 'Array'", () => {
    expect(GRID).to.be.array();
  });
});

describe("Testing behavioural functionality of GRID dimension functions", () => {
  describe("countRows() - day1 challenge", () => {
    it("should return the no. rows in the array for GRID", () => {
      assert.equal(countRows(), 10);
    });
    it("should return a number as an output", () => {
      expect(countRows()).to.be.a("number");
    })
  });
  describe("countColumns() - day2 challenge", () => {
    it("should return the no. columns for each row, in the GRID array", () => {
      assert.equal(countColumns(), 10);
    });
    it("should return a number as an output", () => {
      expect(countColumns()).to.be.a("number");
    })
  });
  
  describe("gridSize() - day3 challenge", () => {
    it("should return '10 x 10' (rows x columns) for the size of GRID", () => {
      assert.equal(gridSize(), "10 x 10");
    });
    it("should return a string as an ouput", () => {
      expect(gridSize()).to.be.a("string");
    });
  })
  describe("totalCells() - day4 challenge", () => {
    it("should return 100 for the total # of cells in GRID", () => {
      assert.equal(totalCells(), 100);
    });
    it("should return a number as an output", () => {
      expect(totalCells()).to.be.a("number");
    });
  });
});

describe("Testing behavioural functionality for converting GRID dimensions to \
JavaScipt GRID indices", () => {
  describe("convertColumn() - day5 challenge", () => {
    it("should, when given a coordinate ('C4'), return the number of the \
column in GRID", () => {
      assert.equal(convertColumn("C4"), 2);
    });
    it("should return an integer-number as an output", () => {
      expect(convertColumn("C4")).to.be.a("number");
    });
  })
  describe("convertRow() - day6 challenge", () => {
    it("should, when given a coordinate ('B10'), return the number of the \
row in GRID", () => {
      assert.equal(convertRow("B10"), 9);
    });
    it("should return an integer-number as an output", () => {
      expect(convertRow("B10")).to.be.a("number");
    });
  });
  
  describe("lightCell() - day6 challenge", () => {
    it("should, when given a coordinate ('C2'), return the contents of \
GRID for that coordinate if both the row index && the col index \
is < 10 ('v' for coordinate 'C2').", () => {
      assert.equal(lightCell("C2"), "v");
      assert.equal(lightCell("B3"), "v", "GRID coordinate 'B3' should \
equal 'v'.");
    });
    it("should return a string as an output", () => {
      expect(lightCell("C2")).to.be.a("string");
    });
  });
});

describe("Testing behavioural functionality of functions identifying Challenge \
objects (i.e. rocks, currents, ships)", () => {
  describe("isRock() - day7 challenge", () => {
    it("should, when given a coordinate ('D1'), return true or false if \
the cell contents of GRID is a rock ('^')", () => {
      assert.equal(isRock("D1"), true);
    });
    it("should return a Boolean as an output", () => {
      expect(isRock("D1")).to.be.boolean();
    });
    it("should return Boolean true for GRID coords with rocks ('^')", () => {
      expect(isRock("D1")).to.be.true;
    })
    it("should return Boolean false for GRID coords without rocks", () => {
      expect(isRock("A1")).to.be.false;
    })
  });
  describe("isCurrent() - day8 challenge", () => {
    it("should, when given a coordinate ('E2'), return true or false if \
the cell contents of GRID is a current ('~')", () => {
      assert.equal(isCurrent("E2"), true);
    });
    it("should return a Boolean as an output", () => {
      expect(isCurrent("E2")).to.be.boolean();
    });
    it("should return Boolean true for GRID coords containing \
currents ('~')", () => {
      expect(isCurrent("E2")).to.be.true;
    })
    it("should return Boolean false for GRID coords without currents", () => {
      expect(isCurrent("D4")).to.be.false;
    });
  });
  describe("isShip() - day9 challenge", () => {
    it("should, when given a coordinate ('B3'), return true or false if \
the cell contents of GRID is a ship ('v')", () => {
      assert.equal(isShip("B3"), true);
    });
  });
});

describe("Testing the behaioural functionality for functions returning rows, \
columns, and/or specific cells that meet certain criteria, \
(i.e. all rocks, etc.)", () => {
  describe("lightRow() - day10 challenge", () => {
    it("should, when given a row number ('1'), return the entire contents of the \
corresponding GRID row (i.e. the array associated with that row in GRID)", () => {
      assert(lightRow(2), ["", "", "v", "", "~", "", "", "", "", ""])
    });
  });
  describe("lightColumn() - day11 challenge", () => {
    it("should, when given a column letter ('C'), return an array of elements \
corresponding to that column in GRID", () => {
      assert(lightColumn("C"), ["", "v", "", "", "", "", "", "~", "", ""])
    });
  });
  describe("allRocks() - day13 challenge", () => {
    it("should, when called, return an array of coordinates of all GRID\
cells that contain rocks ('^')", () => {
      expect(allRocks()).to.eql(["D1", "E3", "F3", "E4", "F4", "B8", "H8", "B9", 
      "B10"]);
    });
  })
  describe("allCurrents() - day13 challenge", () => {
    it("should, when called, return an array of coordinates of all GRID cells \
that contain currents ('~')", () => {
      expect(allCurrents()).to.eql(["E2", "C8", "D8", "D9", "E10", "F10"]);
    });
  })
  describe("allShips() - day14 challenge", () => {
    it("should, when called, return an array of coordinates of all GRID cdells \
that contain ships ('v')", () => {
      expect(allShips()).to.eql(["C2", "B3", "I5"]);
    });
  });
})

describe("Testing behavioural functionality of day15 challenge", () => {
  describe("firstRock() - day15 challenge", () => {
    it("should return an output of type String", () => {
      expect(firstRock()).to.be.string();
    });
    it("should return coordinate 'D1' as the instance of first rock", () => {
      expect(firstRock()).to.equal("D1");
    });
  });
});

describe("Testing behavioural functionality of day16 challenge.", () => {
  describe("firstCurrent() function", () => {
    it("should return a string as output", () => {
      expect(firstCurrent()).to.be.a("string");
    });
    it("should return 'E2' as the GRID coordinate of the first current", () => {
      assert.equal(firstCurrent(), "E2");
    });
  });
});

describe("Testing behavioural functionality of day17 challenge", () => {
  describe("getSortedShipCoords() function", () => {
    const getSortedShipCoords = () => {
      let ship_coords = [];
      const ship = "v";
      
      for (let row = 0; row < countRows(); row++) {
        for (let col = 0; col < countColumns(); col ++) {
          if (GRID[row][col] === ship) {
            const coord = "abcdefghijklmnopqrstuvwxyz".toUpperCase().charAt(col) + (row + 1).toString();
            ship_coords.push(coord);
          }
        }
      }
      
      ship_coords = ship_coords.sort();
      
      return ship_coords;
    };
    it("should return a type array as output", () => {
      expect(getSortedShipCoords()).to.be.an("array");
    });
    it("should return an array with GRID elements corresponding to ships - \
'v', but sorted in alphabetical order", () => {
      expect(getSortedShipCoords()).to.eql(["B3", "C2", "I5"]);
    });
  });
  describe("shipReport() function", () => {
    const shipReport = () => {
      const sorted_ship_coords = getSortedShipCoords();
      const first_and_last_ship = [
        sorted_ship_coords[0],
        sorted_ship_coords[sorted_ship_coords.length - 1]
      ];
      
      return first_and_last_ship;
    };
    it("should return an array as an output type", () => {
      expect(shipReport()).to.be.an("array");
    });
    it("should return a sorted array of the the first and last ship \
coordinates within GRID ('B3', 'I5')", () => {
      expect(shipReport()).to.eql(['B3', 'I5']);
    });
  });
});