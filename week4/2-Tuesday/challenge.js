// const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

// const listItems = document.querySelectorAll("li")

// for(let i = 0; i < colours.length; i++){
//     listItems[i].style.color = colours[i];
// }

// const placeholder = document.getElementById("placeholder");
// const input = document.getElementById("input");
// const submit = document.getElementById("submit");
// const list = document.getElementById("list");

// console.log(placeholder);
// console.log(input);
// console.log(submit);
// console.log(list);

// submit.addEventListener("click", () =>{
//     placeholder.style.color ="goldenrod";
//     placeholder.textContent = input.value;
//     })

// submit.addEventListener("click", () =>{
//     placeholder.style.color ="goldenrod";
//     placeholder.textContent = `<li>${input.value}</li>`;

//     list.innerHTML = `<li>${input.value}</li>`;
// })

// const image = document.getElementById("image");
// console.log(image);

const input = document.getElementById("input");
const button = document.getElementById("submit");

button.addEventListener("click", ()=> {
    image.src = input.value;
})