//required packages
var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var bodyPar = require("body-parser");
var mysql = require("mysql");

//setting up the express server
var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");