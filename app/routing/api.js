var friends = require("../data/friends.js");

function apiStuff(){
    this.postStuff = (info) => {
        var first = new friends();
        first.update(info);
    }
    this.getStuff = () => {
        var first = new friends();
         return first.retrieve();
    }
}

module.exports = apiStuff;