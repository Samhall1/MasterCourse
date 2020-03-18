
//The class function i.e Car should have a capital letter at the start
// Make sure you initialise the value outside your class object.
//You can have set and get functions in your block of code inside the class function 
class Car {
    constructor(HP, Seats, safety) {
        this.horsePower = HP;
        this.numberOfSeats = Seats;
        this.carSafety = safety;
    };

    drive() {
        console.log("This car can drive");
    };

};

                                                 //Initialise new car  3 values 
                                                 //You can make as many as you like with giving them a key
let toyota = new Car ( 99, 4, 6 );               //These are called the flow, everything you assign in here you are setting inside the constructor
let mercedes = new Car ( 180, 5, 8 );            //This is a new class of car


//Extends means it will extend the car class you made earlier
//This is a Sub class it means it can inherit basically from parent class to infant class 
//The super() copies the keys and values into your constructor without hard coding it in 
//why should you create a sub class, because you can add things that only are required to the sub class rather than the main class

class LuxuryCar extends Car {
    constructor(HP, Seats, safety, speed) {
        super(HP, Seats, safety, speed);
        this.carSpeed = speed;                      //This.carspeed is my key and speed is my value this is a sub Class
    };
    
    runFast(){
        console.log("This car can run reeeeaaaaaally fast");
    };

};

let ferrari = new LuxuryCar (200, 2, 6, 180);

//toyota.drive();                                 //You can access this function because you have called it outside the code block
//ferrari.drive();
//mercedes.drive();                               //Accesses your mercedes new Car
//console.log(toyota.horsePower);                 //You always need pass in the value of what ever you want to call (YOU SHOULD HAVE INITIALISED IT EARLIER > let toyota = new Car()) i.e toyota will access the data FOLLOWED BY .WHATEVER it is you need to find 
//console.log(ferrari.horsePower);                //This inherits from the Car class
//console.log(ferrari.carSpeed);

ferrari.runFast()                                  //Because i created a function inside of my class LuxuryCar i need to call it outside the body of class LuxuryCar
