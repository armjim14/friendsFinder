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
        name: "kyle",
        photo: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX38503500.jpg",
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