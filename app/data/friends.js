function update(){
    this.update = (info) => {
        friendsList.push(info);
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
        name: "mark",
        photo: "https://www.easy-oil-painting-techniques.org/images/pencilportrait.jpg",
        score: [
            2, 2, 2,
            2, 2, 2, 
            2, 2, 2, 2
        ]
    },
    {
        name: "sarah",
        photo: "http://www.explore-drawing-and-painting.com/images/avoid-mistakes-drawingpeople.jpg",
        score: [
            3, 3, 3,
            3, 3, 3, 
            3, 3, 3, 3
        ]
    },
    {
        name: "erin",
        photo: "https://i.pinimg.com/originals/04/62/1c/04621c06425d2dd7f1f81ba54f342e5d.jpg",
        score: [
            4, 4, 4,
            4, 4, 4, 
            4, 4, 4, 4
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