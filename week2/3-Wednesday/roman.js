//Create a function that converts an ingeger into roman numeral



function convertToRoman(num) {

    var romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    var roman = "";

    for (var key in romanToNum) {           //this is a for var in loop. //the key stands for the key in the function.
        while (num >= romanToNum[key]) {    // This is basically saying if the num in our function convertToRoman(num) is >= romanToNum[value]return the roman numeral
            roman += key;               //If it isnt it adds 1 to roman "". and repeats until it gets the correct value of num in the variable we named var
            num -= romanToNum[key];
        }
    };
    return roman;
};


console.log(convertToRoman(3));

