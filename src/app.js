const axios = require("axios");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use("/", router);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
