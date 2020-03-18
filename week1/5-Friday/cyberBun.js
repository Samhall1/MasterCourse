console.log("Running");
// let fruit = prompt(`what is your fav fruit`);
// alert("I love " + fruit )


/* Activity(2): Cyber Pet
Cyber pet time!

User selects the kind of animal they’d like (dog, cat,
rabbit) and you have to play with it, feed it, give it
drinks etc.

There should be consequences across the board
– if you don’t play, it gets bored, if you do, it’s happy,
but gets thirsty, that kind of thing. */


class Animal {
    constructor(name) {
        this._name = name;
        this._hunger = 0;
        this._happiness = 0; 
        //this._thirst = 0;
        
    }
    play() {
        this._hunger++;
        this._happiness++;
        //this._thirst++;
    }
    // eat() {
    //     this._hunger--;
    //     this._happiness++;
    // }
    // drink() {
    //     this._thirst--;
    //     this._happiness++;
    // }
    // sleep() {
        
    // }
}
// let pet = prompt ("What animal would you like to be, Dog, Cat or Rabbit");

// alert("You chose " + pet);

// let name = prompt("What would you like to call your " + pet); 

let snoopy = new Animal("Oli");

let activity = prompt(" What would you like your pet to do? Play, eat, drink");

while (snoopy._hunger < 5) {
    if (activity == "play") {
        snoopy.play();
        alert("Oli is now playing, and his happiness level is " + snoopy._happiness + " his hunger level is " + snoopy._hunger); 
        activity = prompt("What would you like your pet to do? Play, eat, drink");
    }
}
// while (snoopy._thirst > 3) {
//     if (activity == "drink") {
//         snoopy.drink();
//         alert("Oli is now drinking, and his happiness level is " + snoopy._happiness + " his hunger level is " + snoopy._hunger + " his thirst level is " + snoopy._thirst);
//         activity = prompt("What would you like Oli to do next? Play, eat, drink");
//     }
// }
//      else (snoopy.hunger >= 5)
//         alert("Oli needs to eat his ");
//         activity = prompt("What would you like Oli to do? Play, eat, drink");
    
// }
// if (activity == "eat") {
//     alert("Oli is now eating ");



// while (snoopy._hunger >= 5) {
//     if(activity == "eat") {
//         snoopy.eat();
//         alert()
//     }
// }























// var activity = prompt(`What would you like ${Nam} to do? Play, eat, drink`);
// while( snoopy._hunger < 5) {
//     if(activity == "play") {
//         snoopy.play();
//         
//         activity = prompt("What would you like your pet to do? Play, eat or drink");
//     } 
// }
// while( snoopy._hunger == 5) {
//     if(activity == "eat")
//     snoopy.eat()
//     alert("Snoopy is too hungry to play right now, you need to feed him");
//     activity = prompt("What would you like your pet to do? Play, eat, drink");
//     alert("Snoopy is now eating! His hunger level is now " + snoopy._hunger);
// }

// while( snoopy._hunger == 5) {
//     if(activity == "eat"){
//         snoopy.eat();
//         alert("Snoopy is now eating! His hunger level is now " + snoopy._hunger);
//         activity = prompt("What would you like your pet to do? Play, eat, drink");
//     }
// }




// class Animal {
//     constructor(name) {
//         this._name = name;
//         this._hunger = 0; // 0 for no Hunger
//         this._happiness = 0; // 0 is not happy
//         this._animalType = animalType;
//     }
//     play() {
//         this._hunger++;
//         this._happiness++;
//     }
//     eat() {
//         this._hunger++;
//         this._happiness++;
//     }
// }

// let doggo = new Animal("Oli");

// while( animalType._hunger < 5) {
//     if(activity == "play") {
//         doggo.play();
//         alert( `is now playing, and his happiness level is ` + animalType._happiness);
//         activity = prompt(`What would you like ${Nam} to do? Play, eat, drink`);
//         } 
// }

// if(doggo._hunger >= 5) {
//     alert(`${Nam} pet is hungry, you need to feed him`);
// }

// while(doggo._hunger <= 5){
//     if(activity == "eat"){
//         doggo.eat();
//         alert(`${Nam} is now eating, and his hunger is ` + doggo._hunger);
//         activity = prompt(`What would you like ${Nam} pet to do? Play, eat, drink`);
//     }
// }





//let animal1 = new Pet("Rabbit", "Carrots", "Sponge");
// let animal2 = new Pet("Cat", "Cat nip", "String");
// let animal3 = new Pet("Dog", "Dog Treats", "Fluffy toys");
// let animal4 = new Pet("Budgie", "Walkers Crisp", "Swing");








//To console.log() any of these you need to pass the key first followed by the ._animal._favFood._favToy.

// class Pet {

//     constructor(animal, favFood, favToy){               //this is passing a value into the constructor
//       this._animal = animal;
//       this._favFood = favFood;
//       this._favToy = favToy;
//       this._hunger = 0;     //0 for no hunger
//       this._happiness = 0   //0 for no happiness

//     }
//     eat(){
//         this._hunger--;
//         this._happiness++;
//     }
//     play(){
//         this._hunger++;
//         this._happiness++;
//     }




// }

// let activity = prompt("What would you like your pet to do? Play, Eat, Drink");

// if (activity == "Eat"){
//     this._animal.eat();
//     alert("Rabbit is now eating and his hunger level is " + this._animal.eat + "Whilst his happiness is " + this._animal.eat);
// } 


// if (activity == "play")
//     this._animal.play();
//     alert("Rabbit is now playing, and his happiness level is " + this.animal.play);


// while (this._animal._hunger < 5){
//     if(activity == "Play"){
//         this._animal.play();
//         alert("Rabbit is now playing, and his happiness level is " + this._animal.play);
//         activity = prompt("What would you like the pet to do now");
//     } 
// }