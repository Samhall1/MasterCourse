
// let day1 = "Monday";
// let day2 = "Friday";
// let day3 = "Saturday";

// let today = "Friday";


// if(today === day3){
//     console.log("I can go out shopping");
// } else if(today === day2){
// console.log("Yes we can go for drinks!");
// } else {
//     console.log("Its a weekday, I have to work");
// }


// let wallet = 50;

// let primarkTrainers = 70;

// if ( wallet > primarkTrainers ){
//     console.log("lets go and buy some trainers ")
// } else {
// console.log("It's too expensive for me :( ");
// }

// let hungry = false;

// // ! means not equal
// if ( !hungry ){
//     console.log("I must eat food");
// } else {
//     console.log("I'm okay I dont need to eat");
// }


//== not strict equal will just check the value of both wether its in a string or just a number 
//=== strict equal will check data types. checks if they are the same.
if ( "3" === 3 ){
    console.log("same")
} else {
    console.log("not same")
}
//This will return "not same".


//!== will check the value and data type to make sure they are the same.
// if ( 20 !== 10 ){
//     console.log("My value is different!");
// } 

// let topScorer = 120;

// let currentScore = 60;

// if ( currentScore >= topScorer ){
//     console.log("You are the new champion");
// } else if ( topScorer > currentScore ){
//     console.log("Nice try, have another go!");
// }


//This will return false because there is nothing in the string to return true.
// let number = "";

// if ( number ){
//     console.log("This text is true");
// } else {
//     console.log("This text is false");
// }

//       //true       true         false
// if ( (7 > 4) && (12 < 20) && (15 > 16) ){
//     console.log("My condition is true");//THIS CODE WONT RUN BECAUSE PART IS FALSE
// } else {
//     console.log("My condition is false");
// }



// let car = "Ferrari";
// colour = "red";
// price = 1000;

//       true               false               true
// when using the && condition if 1 condition is false it wont run the code.
// if ( car == "Ferrari" && colour == "yellow" && price < 800 ){
//     console.log("i can buy this car");
// } else {
//     console.log("I can't buy this car");
// }


// let car = "Ferrari";
// colour = "red";
// price = 1000;

// //       true               false               true
// // when using the ||(or) condition if at least 1 condition is true it will run the code. 
// if ( car == "Ferrari" || colour == "yellow" || price < 800 ){
//     console.log("i can buy this car");
// } else {
//     console.log("I can't buy this car");
// }


// let car = "Ferrari";
// colour = "red";
// price = 1000;

// //       true               false               true
// you can use a mixture of && and || it wil still run the code.
// if ( car == "Ferrari" && colour == "yellow" || price < 800 ){
//     console.log("i can buy this car");
// } else {
//     console.log("I can't buy this car");
// }


// when using the && both conditions need to be true or it ownt run true && true will run.
//false && false wont run.

// let salesTarget = 100;

// let currentSales = 93;

// if ( currentSales > 90 && currentSales < salesTarget ){
//     console.log("We are almost there");
// } else if ( currentSales == salesTarget ) {
//     console.log("I have done enough, uff I can sleep")
// } else if (currentSales < salesTarget) {
//         console.log("I need to sell more");
// } 



// The switch statement is the same as if statements. 
//You choose which one you want to use.
// always put the break when using the switch statement.
// let fruit = "Orange";

// switch( fruit ) {
//     case "banana":
//         console.log("Let's make some banana bread");
//         break;//This code is false so wont run.
//     case "strawberry":
//         console.log("Let's hava a strawberry milkshake");
//         break; // this code is true so will run
//     default:
//         console.log("I don't know that fruit");
// }
