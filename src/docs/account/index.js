const getAccountOverview = require("./account-overview");

module.exports = {
  paths: {
    "/account/overview": {
      ...getAccountOverview,
    },
  },
};
