
let wallet = 100;           //amount of money in wallet

let food = 30;              //cost of food

while (wallet > 0 && wallet > food ){
console.log("Let's go buy some food");

    if(wallet >= food){
    wallet = wallet - food;
    console.log("Now I have in my wallet " + wallet);
} else {
    console.log("I dont have enough money in my " + wallet);
}
};

//First Loop
//is 100 > 0 True
//wallet == 70 

//Second Loop
//70 > 0 True
//wallet == 40

//Third Loop
//40 > 0 True
//wallet == 10

//Fourth Loop
//10 > 0 True
//You dont have enough money to buy food 
//breaks loop

//---------------------------------------------------------------------------

// let basket = [];

// while ( basket.length < 4) {
// basket.push("product");
// console.log("I have " + basket.length + " products in my basket");
// };

//I have 1 products in my basket  ===  This is the first loop
//I have 2 products in my basket  ===  This is the second loop 
//I have 3 products in my basket  ===  This is the third loop
//I have 4 products in my basket  ===  this is the fourth loop

// basket.length = 0
// 0 < 4 true
//basket = ["product"]

// basket.length = 1
// 1 < 4 true
//basket = ["product", "product"]

// basket.length = 2
// 2 < 4 true
//basket = ["product", "product", "product"]

// basket.length = 3
// 3 < 4 true
//basket = ["product", "product", "product", "product"]

//basket.length = 4
//4 < 4 false
//break loop

