function update(){
    this.update = (info) => {
        friendsList.push(info);
    }
    this.retrieve = () => {
        return friendsList;
    }
}

module.exports = update;

var friendsList = [
    {
        name: "kyle",
        photo: "URl",
        score: [
            5, 1, 3,
            4, 2, 5, 
            1, 3, 4, 1
        ]
    }
]