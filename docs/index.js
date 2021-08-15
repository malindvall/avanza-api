const basicInfo = require("./basicInformation");
const components = require("./components");
const endpoints = require("./endpoints");

module.exports = {
  ...basicInfo,
  ...components,
  ...endpoints,
};
