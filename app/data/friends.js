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
        photo: "http://cdn.shopify.com/s/files/1/0891/8314/products/Poker_Face_Die_C_4fedc859b8b66_grande.jpeg?v=1459067191",
        score: [
            5, 5, 5,
            5, 5, 5, 
            5, 5, 5, 5
        ]
    }
]