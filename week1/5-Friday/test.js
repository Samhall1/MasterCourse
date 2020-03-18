console.log("Running");

// // let fruit = prompt("What is your favourite fruit? ");               //This will ask the user what there favourite fruit is 

// // alert("I love " + fruit);                                           //This will reply with "I love AND WHAT EVER YOU ENTERED INTO THE prompt"

// //-----------------------------------------------------------------------------------------------------------------------

class Car {
  constructor(regnum) {
    this._regnum = regnum;
    this._hours = 0;
    this._charge = 0.00;
  }
  get regnum() {
    return this._regnum;
  }
  get hours() {
    return this._hours;
  }
  get charge() {
    return this._charge;
  }
  increaseHours() {
    this._hours++;
    this._charge += 1.50;
  }
}
const pay = (reg, hr) => {
  const car = new Car(reg);
  for (i = 0; i < hr; i++) {
    car.increaseHours();
  }
  prompt(`You need to pay £${car.charge} for ${car.hours} hours.`);
  alert(`You have paid £${car.charge} Thank you`);

}

pay("M7 CAR", 5); //Output: You need to pay £7.5 for 5 hours.

/* Activity(1): Car Park
// Let’s continue with our car park project.

Add a subclass for staff, so that staff can provide their
staff number, and credits they have left to pay for the
car park fees.

Given a staff member parked for 5 hours as before,
show how much it will be charged and remaining
balance.*/

class Staff extends Car {
  constructor(regnum, staffNumber, staffCredit) {
    super(regnum, staffNumber, staffCredit)
    this._staffNumber = staffNumber;
    this._staffCredit = staffCredit;

  }
  get staffNumber() {
    return this._staffNumber;
  }
  get staffCredit() {
    return this._staffCredit;
  }
}
  const payStaff = (reg, hr, staffNumber, staffCredit) => { //This function calls the values from Car and st
    const car1 = new Staff(reg, staffNumber, staffCredit);
    for (let i = 0; i < hr; i++) {
      car1.increaseHours();
    }
    let balance = car1.staffCredit - car1.charge;
    if (balance > 0) {
      console.log(`You parked for ${car1.hours} hours, which costs £${car1.charge}, you now have ${balance} credits left to use`)
    } else {
      console.log(`You parked for ${car1.hours} hours, which costs £${car1.charge}, you dont have enough staff credits to use`)
    }
  }
payStaff("M7 Car", 4, 5, 7.5);

//The if statements need to be outside the class underneath.
//all the functions etc can be inside the class.