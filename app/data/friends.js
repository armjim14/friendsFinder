function update(){
    this.update = (info) => {
        friendsList.push(info);
        console.log(friendsList);
    }
    this.retrieve = () => {
        return friendsList;
    }
    this.Per = (person) => {
        for ( let e in friendsList ){
            if (friendsList[e].name == person) {
                return friendsList[e];
            }
        }
        return "No one With that name"
    }
}

module.exports = update;

var friendsList = [
    {
        name: "anna",
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