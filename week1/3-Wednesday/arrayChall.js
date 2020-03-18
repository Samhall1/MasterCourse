// Activity(1):
// Create a list of your favourite website (3 of them), and
// then add another two once you’ve created the list.
// Then remove the last website.

// let websites = ["Facebook", "Instagram", "Twitter"];

// websites.push("Amazon", "Google");

// websites.pop();

// console.log(websites);
//-----------------------------------------------------------------------------------------------------------------

// Activity(2):
// Research on the following methods: map(), shift(),
// unshift(), slice(), splice() (and many more). Create a
// program to demonstrate the uses of each method,
// some of these you may need more than one example.
// (Pay attention: not all methods would permanently
// update/make changes to the arrays themselves.)

//  index        0          1         2      3        4
let carList = ["Ford", "Vauxhall", "Audi", "BMW", "Ferrari"];

//.length                          // Will tell you how many values are in the array

//carList.shift();                //Removes the first element

//carList.unshift("Bentley");     //Adds a value at the start

//niceCar = carList.slice(2,3);     //This will slice an exact place you want 

//carList.splice(1,3);            // This will give you whats inbetween the indexes you have input  

//-----------------------------------------------------------------------------------------------------------------

//You can have multipul data types in your array i.e. Booleans, Numbers, Strings 
//Always put you mouse cursor in front of the one you want to start counting from using the .slice

// let players = [ "David Beckham", "Steven Gerrard", "Pablo Hernandez", "Harry Redknapp", "Gary Speed", "Lionel Messi"];

// console.log(players[4])
// console.log(players.length);

//The first number you put in .slice will start from that index and cut everything from the left
//The second number will cut from that number to the right
//You can remove values from one side or the other, right || left

// let teamA = players.slice(0,3);  
// let teamB = players.slice(3);   

// teamB.push("Sam Hall");

// console.log(players);

//The first array will stay the same even if you have created 2 teams. It wont affect the original array

//------------------------------------------------------------------------------------------------------------------

//.map() function can only be used in an array
//put a function in the .map()
//.map function/method will loop through the array and grab the value as long as its been referenced in the function

// let fruits = ["Orange", "Papaya", "Peach", "Durian", "Apple"];

// const myFavFruits = fruits.map( ( fruityLove ) => {                     //There is now a function inside the .map( function )
//      return "I love " + fruityLove;                                     //this is the body of your function, what do you want it to do
// }); 

// console.log(myFavFruits);                                               //This will print the variable to the terminal

// const myFavFruits = [                                                  //This is what JavaScript is doing in the background
//      "I love Orange",                                  
//      "I love Papaya",
//      "I love Peach",
//      "I love Durian",
//      "I love apple"
// ];     

//------------------------------------------------------------------------------------------------------------------

let cities = ["New york", "Paris", "London", "Sidney", "Lisben"];

const placesVisited = cities.map( (city) => {
    return "I live in " + city;
    
});

console.log(placesVisited);

//------------------------------------------------------------------------------------------------------------------

//.length example
// let fruits = ['Apple', 'Banana']

// console.log(fruits.length)
// // 2

// let first = fruits[0]
// // Apple

// let last = fruits[fruits.length - 1]
// // Banana

//------------------------------------------------------------------------------------------------------------------