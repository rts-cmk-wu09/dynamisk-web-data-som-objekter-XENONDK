

// opg. 1


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

console.log("opgave 1", "Name", myObject.Name)
console.log("opgave 1", "Hobby", myObject.Hobby)
console.log("opgave 1", "age", myObject["age"])
console.log("opgave 1", "recomended game 1", myObject["recommendedGames"]["game1"])
console.log("opgave 1", "recomended game 2", myObject.recommendedGames.game2)
console.log("opgave 1", "recomended game 3", myObject.recommendedGames.game3)



// opg. 2

let myObject2 = {
    Name: "Daniel",
    Hobby: "Gaming",
    age: 21,
    married: false,
    recommendedGames: {
        game1: "The Legend of Zelda: Breath of the wild",
        game2: "Red Dead Redemption 2",
        game3: "Risk of Rain 2"
    },
    array:["this", "is", "an", "array", 42, true,{
        pets: {
            hermione: {
                type: "kat",
                race: "Norwegian forest cat"
            },
            Gimli: {
                type: "dog",
                race: "Formula 1 labrador"
            }
        }
    }]
}


myObject2.array.forEach(Element => console.log("opgave 2", Element))

