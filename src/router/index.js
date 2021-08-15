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

router.get("/", (req, res, next) => {
  res.json("hello world!");
});

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.get("/login/bankid", (req, res, next) => {
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

router.post("/login/bankid/status", jsonParser, (req, res, next) => {
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

router.post("/account/overview", jsonParser, (req, res, next) => {
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

module.exports = router;
