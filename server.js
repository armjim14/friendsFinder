var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var html = require("../friendsFinder/app/routing/htmlRoutes.js")

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var home = new html;