
// //Arrays are a refference type

// // index            0               1       2          3
// let games = ["Elite Dangerous", "Crysis", "RDR2", "bioshock"];     //Arrays store multipul values.

// console.log(games[1]);          //This accesses the index possition in the array
// console.log(games.length);         // This will give you 4 even tho it starts at 0 it still counts like a human. JavaScript starts counting from 0

// let reverseArray = games.reverse();
// console.log(reverseArray);


// games.push("God Of War IV", "Fifa");         //This will add to the end of your array. You can also add multipul values
// console.log(games);

// games.unshift()                               

// games.pop();                         // This will remove from the end of your array
// console.log(games);

// let shop = ["cat", "dog", "turtle"];

// let myPets = [ ...shop ];           //... is a clone must be in an array and the name of the variable 

// //myPets is making a reference to what ever is in animals


// shop.push("Pony");


// console.log(myPets);

let shop = ["cat", "dog", "turtle"];

let zoo = ["Lion", "Cheeky Monkey", "Hippo"];

let allAnimals = [...zoo, ...shop];           //This ... will clone your value thats in your array. // It will create a new array with the new stuff added.

// console.log(allAnimals);


console.log(zoo.slice(1, 2));