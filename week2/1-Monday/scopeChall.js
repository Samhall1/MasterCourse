
//  const myHello = [{great: "Hello Code Nation"}];

//  function sayHello(){                       //This is a simple function
//  return "Hello Code Nation";                //It runs hello code nation to the console when called sayHello() outside of the code block
//  };

//  //sayHello(); << This is calling the function above to the console.

//  function repeat(callBack){                 //This is my second function with callback inside the repeat. the callback inside the parameter can be called anything          
//     for (var i = 0; i < 5; i++){            //This will run my loop 5 times
//         console.log(callBack());            //This will callback the simple function saying "Hello Code Nation"
//  }                                          
//  }

//  repeat(sayHello);                          //This is calling the function sayhello inside the repeat function 
                                            //It will run the code inside of the repeat function but run it on the sayHello function ( higher order function )
                                            
 //---------------------------------------------------------------

//  let five = [1, 2, 3, 4, 5];

//  var fiveGuys = five.map( ( numbers ) => {
//      return numbers * 3;
//  })

//  console.log(fiveGuys)

 //---------------------------------------------------------------

/* Test this function to make
sure it works by passing a
number to the doMaths
function, then passing a
number and one of the four
maths functions, to the
returned function. */

// const test = () => {

// }


//  const add = (a, b) => {
//      return a + b;
//  }
//  const subtract = (a, b) => {
//      return a - b;
//  }
//  const multiply = (a, b) => {
//      return a * b;
//  }
//  const divide = (a, b) => {
//      return a / b;
//  }
//  const doMaths = (num1) => {
//         return (num2, fn) => {
//             return fn(num1, num2);
//         }
//  }

//  console.log(doMaths(test()) );


