// Set Requirements
const express = require("express");
const exphbs = require("express-handlebars");
// const mysql = require("mysql");

// Set app to express
const app = express();

// Establish PORT
var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Listen for PORT Connection
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
