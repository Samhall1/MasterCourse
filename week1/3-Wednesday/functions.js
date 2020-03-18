
//When you create a variable in the function it is only accesable inside the function.
//you can not use your variable outside the function this is known as incaptilation.
//Global scope is outside your function.
//local scope is everything inside your function.
//Your function will look inside(local) itself first before going to global.
//Always call your function in the parameters


//Example 1
let movie = "American beauty";

const favMovies = () => {
    let year = 1999;
    // let movie = "Batman Begins";
    console.log("My favourite movie is " + movie);
    //console.log("The movie was released in " + year);
}

favMovies();



const area = (width, length ) => {
 return width * length;//Always return what you want the function to do.
}

console.log(area(8,7));


const area = (width, length) => {
    return "My room area is " + width * length + " m2"; 
}

console.log(area(8,7))

//Example 2

function square (number){
return number * number; 
}
square(5);


let orderCount = 0;

const takeOrder = (topping) => {
console.log(`Pizza with ${topping}`);
return orderCount++;
}

takeOrder("pineapple");
takeOrder("pepperoni " + "and " + "cheese ");
takeOrder("Vegan");
console.log(orderCount);

let pin = 1234;
let accountBalance = 100;

const cashMachine = (pin, accountBalance) => {
    
if ( pin === 1234 ){
    console.log( "Correct pin entered" );
} else if  ( pin !== 1234 ){
    console.log("Incorrect pin, please try again");
} else if  ( (accountBalance > 0 ) || (accountBalance <= 100) ) {
    console.log("You may take your monies!! ")
}
else if ( (accountBalance < 0) || (accountBalance > 100) ){
    console.log("You dont have the required funds to make thsi transaction");
} 
}

cashMachine( 1234, 25 );
