function update(){
    this.update = (info) => {
        friendsList.push(info);
        console.log(friendsList);
    }
    this.retrieve = () => {
        return friendsList;
    }
}

module.exports = update;

var friendsList = [
    {
        name: "Anna",
        photo: "https://i.pinimg.com/736x/63/f9/11/63f91182663fbbef31761bfca9aff2e8.jpg",
        score: [
            1, 1, 1,
            1, 1, 1, 
            1, 1, 1, 1
        ]
    },
    {
        name: "john",
        photo: "http://momentosdecameron.co/wp-content/uploads/2019/06/how-to-draw-people-faces-drawing-peoples-faces-home-improvement-loan-options.jpg",
        score: [
            5, 5, 5,
            5, 5, 5, 
            5, 5, 5, 5
        ]
    }
]