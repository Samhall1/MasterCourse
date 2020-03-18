//Challenge 1
//create variable named password
// let password = "mysecretpassword";

// //check if the password is < 8 log that the pw is to short.
// //log to console.
// if (password.length < 8) {
//     console.log("Your password is too short");
// } else {
//     console.log(password);
// }

//----------------------------------------------------------------------------------------

//Challenge 2
//create var called num
// check if divisble by 3 or 5. 
//"This number is divisible by 3 or 5"
//"this number is not divisible by 3 or 5"

// let num = 15;

// if ( (num % 3 === 0) && (num % 5 === 0) ){
// console.log("This number is divisible by 3 or 5");
// } else {
//     console.log("This number is not divisible by 3 or 5");
// }

//----------------------------------------------------------------------------------------

//Challenge 3
// let num = 1;

// if ( (num % 3 === 0) ){
//     console.log("fizz")
// } else if ( (num % 5 === 0) ) {
//     console.log("buzz");
// } else {
//     console.log("fizz buzz");
// }

//----------------------------------------------------------------------------------------

//Challenge 4

// let myNumber = 220022;

// let numberConvertToString = myNumber.toString();        //This is converting a number to a string.

// console.log(numberConvertToString);                      
// console.log( typeof numberConvertToString );            //This is checking what data type it is

// let sliceString = numberConvertToString.split("");      //This is going to split each character in the string. You can only use the .split in strings.
// console.log(sliceString);                               // ['2', '0', '3']

// let reversedString = sliceString.reverse();             //You can only use .join() .reverse() on an array
// console.log(reversedString);

// let joinedString = reversedString.join("");               //This gives it you back as a string 
// console.log(joinedString);         

// let stringToNumber = parseInt(joinedString);              //parseInt() converts the string back to a number  
// console.log(typeof joinedString);

// if( myNumber === joinedString ){
//     console.log("Those Numbers are a palindrome");
// } else {
//     console.log("Those Numbers are not a palindrome");
//}

//----------------------------------------------------------------------------------------

//Challenge  5

// let time = 10;// commuting 8.00-9.00 and 17.00-18.00
//  let placeOfWork = "CodeNation"; //here between 9.00-17.00
//  let townOfHome = "Oldham"; // here before 8.00 and after 18.00
// if ( time > 9 && time < 17 ) {
//     console.log(`I am at ${placeOfWork}`);
// } else if ( time <= 8 || time >= 18) {
//     console.log(`I am at ${townOfHome}`);
//  } else {
//     console.log("I am commuting");
//     }

//----------------------------------------------------------------------------------------

// Challenge 6
// let i = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let aIndex = i.lastIndexOf("a");
// let eIndex = i.lastIndexOf("e");
// let iIndex = i.lastIndexOf("i");
// let oIndex = i.lastIndexOf("o");
// let uIndex = i.lastIndexOf("u");
// let biggestIndex = 0;
// let lastVowel = " ";
// if (aIndex > biggestIndex){
//     biggestIndex = aIndex;
// }
//  if (eIndex > biggestIndex){
//      biggestIndex = eIndex;
// }
// if (iIndex > biggestIndex){
//     biggestIndex = iIndex;
//  }
//  if (oIndex > biggestIndex){
//      biggestIndex = oIndex;
//  }
// if (uIndex > biggestIndex) {
//      biggestIndex = uIndex;
//  }
// console.log(`the last index vowel of the string is ${lastVowel}`)

//----------------------------------------------------------------------------------------

// Challenge 7

// let word = "SAS";

// if (word.charAt(0) === word.charAt(word.length -1)) {
//     console.log("They are the same")
// } else if (word.charAt(0) !== word.charAt(word.length -1 )) {
//     console.log("They are different ")
// };

//----------------------------------------------------------------------------------------

// Challenge 8
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return
// the numbers multiplied together.


// let num1 = 20;
// let num2 = 21;

// if((num1 % 2 === 0) && (num2 % 2 === 0)) {
//     console.log(num1, num2);
// } else {
//    console.log( num1 * num2 );
// }














// const number = (num1, num2) => {

//     if (num1 % 2 === 0) {
//         return num1;
//     } else if (num2 % 2 === 0 ) {
//         return num2;
//     } 



// };

// let num1 = 2;
// let num2 = 4;


// console.log()