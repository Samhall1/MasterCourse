//Classes are templates for objects
//DONT REPEAT YOURSELF === DRY;
//Class is always starts with an upper case. Pascal Caseing ( UpperCamelCase)

// let employee1 = {
//     name: "John",
//     job: "Uber Driver",
//     email: "john@email.com"
// };
// let employee2 = {
//     name: "Sarah",
//     job: "Waiter",
//     email: "Sarah@email.com"
// };
// let employee3 = {
//     name: "David",
//     job: "Software engineer",
//     email: "david@email.com"
// };

// class Employee {    
//     constructor (userName, userJob, userEmail) {           //This is a function embeded in classes in JavaScript
//         this.name = userName;                              // this.name is the key what ever you put in to the let employee1 = new Employee ("john") << this would be the value
//         this.job = userJob;
//         this.email = userEmail;
//     }
//      twerk () {
//             console.log(`${this.name} knows how to twerk`);      
//         };

    
// };

// //   This value is === to the class employee
// let employee1 = new Employee ("John", "Chef", "John@email.com"); //userName = "John"// userJob = "Chef" // userEmail = "john@email.com"
// let employee2 = new Employee ("Ian", "CEO", "ian@gmail.com");

// employee1.twerk();      //This will run the code inside of the function in our class.
// employee2.twerk();

// console.log(employee1.name);            //Dot notation to access the values from the key in class employee
// console.log(employee1.job);
// console.log(employee1.email);

//console.log(employee1, employee2);          // This will access all of the employees info

//-----------------------------------------------------------------------------------------------------------

class BankUser {
    constructor(userName, userPass){                                                            //What ever gets put in the parenthasis need to be passed in the main body                 //These are default values from the database
        // this.userServer = "John";                                                            //keys = this.userServer this.passServer
        // this.passServer = 12345;                                                             //Values = "John", 12345, 200
        // this.balance = 200;

        this.userInput = userName;                                                              //This is what the user is inputing to the database
        this.passInput = userPass;

    };
                                                                                                //This will be safe to open the bank account
    get userBalance() {                                                                         //this is the getter
        if ( this.userServer === this.userInput && this.passServer === this.passInput) {        //This is checking what the user as input to what is stored on the server i.e the constructor.
            return this.balance;                                                                //return is used inside a function
        } else {                                                                                //This will allow you to grab something from the constructor
            return "Sorry your login details are wrong";
        }
      
    };

    set shopping ( cost ) {   
                                                                                                //This is passing the value that is passed in to the body (cost)
        if ( this.userServer === this.userInput && this.passServer === this.passInput) {        //This is checking what the user as input to what is stored on the server i.e the constructor.
            return this.balance = this.balance - cost;                                          //return is used inside a function
        } else {
            return "Sorry your login details are wrong";
        }
        
                                                                                               //This is updating the balance 
    }

};

let john = new BankUser("John", 12345, 200);                                                        //This is calling the BankUser function and adding another to it

john.shopping = 20;                                                                            //This is calling the cost function and updating it when you call it

console.log( john.userBalance );

console.log("Hi");






