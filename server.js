// Set Requirements
const express = require("express");
const exphbs = require("express-handlebars");
// const mysql = require("mysql");

// Set app to express
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Establish PORT
var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Listen for PORT Connection
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
