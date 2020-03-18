//Objects can hold alot of multipul values i.e Name, Address, Email
//you can put keys and values in an object
//To access something in the object you need to use the value which in this case is contact followed by .name for example
//You use : instead of ; because we are in an object
//Always add a , if you are addind more in to your object

//----------------------------------------------------------------------------------------------------------------------------


let contact = {
    names: ["Bruno", "Fred", "Paul"],              // This is known as a key pair name is the key "bruno" is the value
    age: 37
};

contact.name = "Felix";              //This will add this to the object
contact.names.push("Felix");          //This will add a name to your array
contact.city = "Newcastle";         //This will create it if it isnt in the object
console.log(contact["name"])       //bracket notation 

console.log(contact.name);        // will give you the name from the object
console.log(contact.age);         //will give you the age from the object

console.log(contact.names);         //This will access the array names in an object at the index you put in bracket notaion


//----------------------------------------------------------------------------------------------------------------------------

//This is creating an Object inside an array. 2 values both objects 
//this. basically means it is accessing in that object
//The reason you access it with this.name for example so that you dont have to keep manually change it it will do it when its updated

let employees = [
    {
        name: "Julia",
        job: "PR",
        shufflePaper: function() {
            return `${this.name} shuffles paper all day long`;          //This is how you can creat a function in a object
        }
    }, 
    {
        name: "Brad",
        job: "Logistics",
        drives() {
            return `${this.name} loves ${this.job} and drives alot`;

        }
    }

];

console.log(employees[1].drives());
// console.log(employees[0].shufflePaper());
//console.log(employees[0].name);     //This will access the value you require and the name within that object