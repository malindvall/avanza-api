const loginStart = require("./login-start");
const loginCollect = require("./login-collect");
const accountOverview = require("./account-overview");

module.exports = {
  paths: {
    "/login/bankid": {
      ...loginStart,
    },
    "/login/bankid/status": {
      ...loginCollect,
    },
    "/account/overview": {
      ...accountOverview,
    },
  },
};
