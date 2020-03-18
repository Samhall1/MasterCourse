//Terminal 9
//WEEK 2 LESSON 1 Prototypes on moodle
//Classes and prototypes are similar 
//Capital letter to start the prototype
//Method is the same as function
//.call is the same as super() in sub classes
//To initialise anyone its exactly the same for both for example (let sam = new PersonC("Sam", 12,4))

//These do exactly the same thing 

//This is a Prototype(also a function constructor)
//You dont add functions inside of it 
//you add it after
let PersonP = function(nm, id){
    this.name = nm;
    this.id = id;

};

//This is the function that is being called from inside the class
//If you make a sub function(Sub prototype) it will inherit the same as a sub class does you need to use the .prototype if using this 
PersonP.prototype.getDetails = function(){
    return `Name:${this.name} / Id: ${this.id}`
}

//This is a class
class PersonC {
    constructor(nm,id){
        this.name = nm;
        this.id = id;
    }
};
//-------------------------------------------------------------------------------------------------------------------------