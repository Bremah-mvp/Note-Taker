// dependencies

const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// sets up the express app

const app = express();
const PORT = process.env.PORT || 3007;

// sets up the express app to handle parsing

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// starts the server to begin listening

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
});
