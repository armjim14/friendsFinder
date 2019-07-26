var path = require("path");

function getPage(){
    this.home = (res) => {
        return res.sendFile(path.join(__dirname, "../public/index.html"));
    }
    this.ques = (res) => {
        return res.sendFile(path.join(__dirname, "../public/questions.html"));
    }
}

module.exports = getPage;