var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var htmlF = require("../friendsFinder/app/routing/htmlRoutes.js")

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = 3000;
var route = new htmlF;

app.get("/reset.css", (req, res) => {
    res.sendFile(path.join(__dirname, "/app/public/reset.css"))
})

app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "/app/public/style.css"))
})

app.get("/logic.js", (req, res) => {
    res.sendFile(path.join(__dirname, "/app/public/logic.js"))
})

app.get("/jquery.js", (req, res) => {
    res.sendFile(path.join(__dirname, "/app/public/jquery.js"))
})

app.get("/", (req, res) => {
    route.home(res);
})

app.get("/survey", (req, res) => {
    route.ques(res);
})

app.listen(port, () => {
    console.log("listening on localhost:" + port);
})