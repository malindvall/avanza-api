const axios = require("axios");
const bodyParser = require("body-parser");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs");

const COOKIE_NAME = "AZABANKIDTRANSID";

const URL_LOGIN_START =
  "https://www.avanza.se/_api/authentication/sessions/bankid";
const URL_LOGIN_COLLECT =
  "https://www.avanza.se/_api/authentication/sessions/bankid/collect";
const URL_ACCOUNT_OVERVIEW =
  "https://www.avanza.se/_api/account-overview/overview/categorizedAccounts";

const app = express();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res, next) => {
  res.json("hello world!");
});

app.get("/login/bankid", (req, res, next) => {
  axios
    .post(URL_LOGIN_START, {})
    .then((response) => {
      console.log(response.data);

      res.json(response.data);
    })
    .catch((error) => {
      console.log("ERROR");
    });
});

app.post("/login/bankid/status", jsonParser, (req, res, next) => {
  axios
    .get(URL_LOGIN_COLLECT, {
      headers: {
        Cookie: `${COOKIE_NAME}=${req.body.transactionId}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log("ERROR");
      res.json(error);
    });
});

app.post("/account/overview", jsonParser, (req, res, next) => {
  // need more information
  axios
    .get(URL_ACCOUNT_OVERVIEW, {
      headers: {
        Cookie: `${COOKIE_NAME}=${req.body.transactionId}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log("ERROR");
      res.json(error);
    });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
