//Terminal 9
// LET VS VAR
//Use let when you just need the loop to run inside the code
//Use VAR when you want to use the loop outside the code block
//Block scope is any of the below and more.
// if () {
// };
// for(){
// };
// while(){
// };

                                           //It doesnt matter if you change any of the code inside as long as it still says let the let will finsih straight after the code block
// for (var i = 0; i < 1; i++){               //let is initialising the variable. 
// console.log(i)                             //if var is initialised the console.log outside will work.
//                                            //let will only live inside the block code it will not exsist outside anymore.  
//                                            //If you use var the variable still exsists after the block code has run.                                         
// };

//i=0;
//0 < 2; True
//console.log(0);
//i++ => 1

//i=1;
//1<2;True
//console.log(1);
//i++ => 1

//i=2;
//2<2 false.
//break code;

//console.log(i)                  //This will be undefined because its not inside the block. because i is not defined.

// if (5 > 2){
//     let answer = "This is True";         
// }
// console.log( answer );       this will not run because let only lives inside the code block


if (5 > 2){
    var answer = "This is true";
};

console.log(answer);            //This will work because the variable VAR has been used and it can be accessed outside the code block.