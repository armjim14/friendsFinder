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
            1, 1, 1,
            1, 1, 1, 
            1, 1, 1, 1
        ]
    },
    {
        name: "john",
        photo: "URl2",
        score: [
            5, 5, 5,
            5, 5, 5, 
            5, 5, 5, 5
        ]
    }
]