//Terminal 9
//The variable can only be called once in the global scope
//If you call a variable inside your block of code(local scope) it doesnt matter if its the same as your global scope.
//If there is no variable assigned in the local scope it will look in the global scope and use it.
//${holiday} is a variable the function will look for a variable with that name inside the local scope if it cant find one it will look outside to the global scope
//You can't go inside other functions to access a variable you can only go backwards
// let holiday = "Scunthorpe";

// console.log(`We are going on holidays to ${holiday}`);

// function chooseHoliday(){
//     //let holiday = "Benidorm";
//     let food = "Paella";
//     console.log(`lets go to ${holiday}`);     
//     //console.log(`My favourite drink is ${drink}`);
//     let drink = "Mojito";
//     function chooseFood(){
        
// console.log(`My favourite food is ${food} `);
// console.log(`My favourite drink is ${drink}`);
//     }
//     chooseFood();                   //This is going back one step and accessing the variable food.
// }

//                                      //This wouldnt work because food variable is initialised outside the function in the global scope.
// chooseHoliday();

//---------------------------------------------------------------------------------------------------------------------------------

// What is a higher order function

let whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}

let greet = (time, fn) => {                         //the great() function is calling the values at the bottom in the parameters. 
    if(time < 1200){                                //fn is calling the function fn = function
        fn("Morning");
    } else if (time >= 1200 && time < 1800){        //These will both have to be true because we have called the && 
        fn("Afternoon");
    } else { 
        fn("Evening");
    }
}

greet(2500, whichGreeting);             //This is known as a call back, calling another function inside a function.

//-------------------------------------------------------------------------------------------------------------------------------

