// npm packages that were used
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var html = require("../friendsFinder/app/routing/htmlRoutes.js");
var apix = require("../friendsFinder/app/routing/api.js");

var app = express();

// allowing to communicate back and fourth with data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// port we are going to be using 
var PORT = process.env.PORT | 3000;
// this uses htmlRoute.js and api.js to return to us a render HTML page && api request
var route = new html;
var api = new apix;

// links and sources that the HTML pages are using
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


// what HTML file to render depending on the route
app.get("/", (req, res) => {
    route.home(res);
})

app.get("/survey", (req, res) => {
    route.ques(res);
})

// being able to recieve data from questions.html
app.post("/api/people", (req, res) => {
    var insert = req.body;
    api.postStuff(insert);
})

// sending data from friends.js
app.get("/api/people", (req, res) => {
    return res.send(api.getStuff());
})

// event listener to allow the server to start running
app.listen(PORT, () => {
    console.log("listening on localhost:" + PORT);
})