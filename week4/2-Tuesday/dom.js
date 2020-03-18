
const list = document.getElementsByTagName("li");

const notOrange = document.getElementsByClassName("not-orange");

console.log(list.length);
console.log(list[0]);
console.log(list[3]);

list[0].style.color="red";

for (let i = 0; i< list.length; i++){
    list[i].style.color = "orange";
    }

for (let i = 0; i < notOrange.length; i++){
    notOrange[i].style.color = "red";
}

console.log(list);



// document.querySelector(".list-parent"); this will grab a singular element by id
// document.querySelectorAll(".green"); This is how you grab mulitpul classes 
// document.querySelector("#heading"); The hash tag is an id

//universal collectors querySelectorAll and querySelector

//const listItems = document.querySelectorAll("li:nth-child(even)"); This will grab the even numbers 

// for(let i=0; i < listItems.length; i++){
//     listItems[i].style.color = "lightgreen";
//     }