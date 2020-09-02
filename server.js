// dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// sets up the express app
const app = express();
const PORT = process.env.PORT || 3007;