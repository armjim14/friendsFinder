var friends = require("../data/friends.js");
var first = new friends();

function apiStuff(){
    this.postStuff = (info) => {
        first.update(info);
    }
    this.getStuff = () => {
        return first.retrieve();
    }
    this.getPerson = (person) => {
        return first.Per(person);
    }
}

module.exports = apiStuff;