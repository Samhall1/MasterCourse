//  This is interactivity in javascript

//you can add css within javascript to your html file 

//This is how to grab elements by id

console.log("Running")

// document.getElementById("greeting").style.color = "blue";
// // the first part is grabbing what you want the .style.color = blue which is changing the color 
// // this is where i can grab anything i want from my html

// document.getElementById("greeting").style.backgroundColor = "yellow";

const title = document.getElementById("greeting");
// //this is assigning all this ^^^^ and making your life easier to change things by just starting with title
// //Like the below statement 

// title.style.color = "Blue";
// title.style.backgroundColor = "yellow";

//----------------------------------------------------------------------------------------------------------

//This is how you grab classses in html in javascript
// title.style.backgroundColor = "yellow";


//----------------------------------------------------------------------------------------------------------

title.addEventListener('click', function() {
    console.log("heading clicked");             //This will tell you if it works so make sure you console.log after each stage 
   


    if( title.style.backgroundColor == "yellow") {      //If the title is == to yellow false
        title.style.backgroundColor = "blue";           //return title background blue which will be true so it will run
        title.style.color = "white";
    } else {
        title.style.backgroundColor = "yellow";    
        title.style.color = "Black";     
    }
    console.log(title.style.backgroundColor);
});


// const paragraph0 = document.getElementsByClassName("paragraph")[0];  // if you want to grab the first paragraph make sure you do [] with the index of what you want to grab in 
// const paragraph1 = document.getElementsByClassName("paragraph")[1];  // Grabbing an idividual element  using [0][1] etc 

// // document.getElementsByClassName("paragraph").style.color = "blue"; This wont change anything

// paragraph0.style.color = "blue";
// paragraph1.style.color = "blue";

const paragraphs = document.getElementsByClassName("paragraph")
// This is a variable assigned to the document, everytime I reference paragraphs it will do ^^^^


for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "blue";
}
//we can put paragraphs[i] because i represents all the paragraphs 
//The for loop is a easy way to DRY "DONT REPEAT YOURSELF"

document.getElementsByTagName("h3")[0].style.backgroundColor = "Orange";

//You have to add the [0], [1] etc to grab the elements because getElementsByTagname is plural 

//---------------------------------------------------------------------------------------------------------------

document.querySelector("#container").style.backgroundColor = "orange";
//This can grab anything you want, an id a class etc using the # because its an id . if it was a class 