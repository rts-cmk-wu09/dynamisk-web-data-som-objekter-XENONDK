let myObject = {
    Name: "Daniel",
    Hobby: "Gaming",
    age: 21,
    recommendedGames: {
        game1: "The Legend of Zelda: Breath of the wild",
        game2: "Red Dead Redemption 2",
        game3: "Risk of Rain 2"
    }
}

console.log("Name",myObject.Name)
console.log("Hobby" ,myObject.Hobby)
console.log("age",myObject["age"])
console.log("recomended game 1",myObject["recommendedGames"]["game1"])
console.log("recomended game 2",myObject.recommendedGames.game2)
console.log("recomended game 3",myObject.recommendedGames.game3)