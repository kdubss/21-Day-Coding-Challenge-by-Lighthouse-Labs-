// ./functions/firstRock.js
const filterGridBy = require("./filterGridBy").filterGridBy;

/**
 * [firstRock returns GRID coordinate of first rock instance]
 * @return {[String]} [String coordinate ("D1") of GRID corresponding to first rock]
 */
 const firstRock = () => filterGridBy("^")[0];

module.exports = {
  firstRock
};