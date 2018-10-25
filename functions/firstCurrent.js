// ./functions/firstCurrent.js
const filterGridBy = require("./filterGridBy").filterGridBy;

/**
 * [firstCurrent returns GRID coordinate of first current]
 * @return {[String]} [String coordinate ("E3") of GRID corresponding to first current]
 */
const firstCurrent = () => filterGridBy("~")[0];

module.exports = {
  firstCurrent
};