//Terminal 9
//This challenge is to convert a class and sub class to a prototype. The top example is a class / sub class and the one below is a protoctype



// class Animal{
//     constructor(name){
//     this._name = name;
//     this._hunger = 100;
//     this._thirst = 100;
//     }
//     get name(){
//     return this._name;
//     }
//     get hunger(){
//     return this._hunger;
//     }
//     get thirst(){
//     return this._thirst;
//     }
//     eat(){
//     this._hunger--;
//     }
//     drink(){
//     this.thirst--;
//     }
//     }

    // class Bunny extends Animal {
    //     constructor(name, lovesCarrot, favFood){
    //     super(name);
    //     this._lovesCarrot = lovesCarrot;
    //     this._favFood = favFood;
    //     }
    //     get lovesCarrots(){
    //     return this._lovesCarrot;
    //     }
    //     get favFood(){
    //     return this._favFood;
    //     }
    //     }
    //     const rosie = new Bunny(
    //     "Rosie",
    //     true,
    //     ["basil", "rockets", "broccoli"]
    //     );


let Animal = function ( name, hunger, thirst ) {
    this.name = name;
    this.hunger = 100;
    this.thirst = 100;
}
Animal.prototype.getDetails = function(){
    return `Name: ${this.name} / hunger: ${this.hunger} / thirst: ${this.thirst}`;
}

let sam = new Animal("Sam", "Yes", "Yes");

console.log(sam.getDetails(), sam.name);




 let Bunny = function(name, lovesCarrot, favFood) { 
     Animal.call(this, name, lovesCarrot, favFood)
     this.lovesCarrot = lovesCarrot;
     this.favFood = favFood;
 };
 
 Bunny.prototype=Object.create(Animal.prototype);
 Animal.prototype.animalInfo = function() {
     return `${this.name} -> ${this.lovesCarrot} -> ${this.favFood}`;
 }
    let Hop = new Bunny ("Hop", "Yes", "Carrot");

 console.log(Hop.getDetails(), Hop.name);
 console.log(Hop.animalInfo());


