const axios = require("axios");
const bodyParser = require("body-parser");
const express = require("express");
const swaggerUi = require("swagger-ui-express");

const {
  URL_LOGIN_START,
  URL_LOGIN_COLLECT,
  URL_ACCOUNT_OVERVIEW,
  COOKIE_NAME,
} = require("./constants");
const swaggerDocument = require("../docs");

const router = express.Router();
const jsonParser = bodyParser.json(); // parses application/json requests

router.get("/", (req, res) => {
  res.json("hello world!");
});

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.get("/login/bankid", (req, res) => {
  axios
    .post(URL_LOGIN_START, {})
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log("ERROR");
      res.json(error);
    });
});

router.post("/login/bankid/status", jsonParser, (req, res) => {
  if (!req.body.transactionId) {
    return res.status(422).json("Validation error: transactionId is required");
  }

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

router.post("/account/overview", jsonParser, (req, res) => {
  // need more information
  res.json(
    `Endpoint is currently incomplete, should send a request to: ${URL_ACCOUNT_OVERVIEW}`
  );
});

module.exports = router;
