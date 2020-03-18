
//for loops, loop through something as many times as you would like it to
//You can also decrement it using the -- instead of ++ which would increment it 


// i = 0 - This will check the start from the first index
// i(0) < 3 -True - This is going to check what you tell it to for example in this case it wants to repeat the loop 3 times
// i++ - This will increment each time by 1

//--------------------------------------------------------------------------

// for (let i = 0; i < 3; i++){
//     console.log("I love Manchester")       //This is the body that will run 3 times
// };

//This is what JavaScript is doing in the back ground

//First Loop
//i = 0 only check when we start
//0 < 3 True
//console.log("I love Manchester")
//i++ => (i = 0 + 1) = 1

//Second Loop
//1 < 3 True
//console.log("I love Manchester");
//i++ => (i = 0 + 1) = 2

//Third Loop
//2 < 3 True
//console.log("I love Manchester")
//i++ => (i = 0 + 1) = 3

//Forth Loop
//3 < 3 False
//Break loop

//--------------------------------------------------------------------------

//You can call it what ever you like but i is the standard
//Second Example

// for (let j = 1; j <= 3; j++) {
//     console.log("My current value of j is " + j);
// };

//First Loop
//j = 1;
//1<= 3 True
//console.log("my current value of j is 1");
//j++ => j = 2

//Second Loop
//j = 2;
//2 <= 3 True
//console.log("my current value of j is 2");
//j++ => j = 3

//Third Loop
//j = 3;
//3 <= 3 True
//console.log("my current value of j is 3");
//j++ => j = 4

//Forth Loop
//j = 4;
//4 <= 3 False
//Break Loop

//--------------------------------------------------------------------------

//This code will only run twice

// for (let j = 2; j <= 3; j++) {
//     console.log("My current value of j is " + j);
// };

//--------------------------------------------------------------------------

//This code will run once
//If you increment j < 3 or more j < 8 this will run the loop that many times


// for (let j = 0; j < 1; j++) {
//     console.log("My current value of j is " + j);
// };

//--------------------------------------------------------------------------

// for (let i = 2; i > 0; i--){
//     console.log("Hello World");
// };

//First Loop
//i = 2
//2 > 0 True
//console.log("Hello World");
//i-- => i = 1

//Second Loop
//i = 1
//1 > 0 True
//console.log("Hello World");
//i-- => i = 0

//Third Loop
//i = 0
//0 > 0 False
//Break Loop 

//--------------------------------------------------------------------------

//You can use the value of i inside your loop

// let cities = ["Barcalona", "Tokyo", "Manchester", "Leeds"];

// //let myArrayLength = cities.length; // you can make your life easier by adding this if needs be

// for (let i = 0; i < cities.length; i ++){
//     console.log(cities[i]);
// };
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[2]);

//The first time you run the loop the first value will be 0 which is "Barcalona".
// let name = "sam";
//  console.log(name);

