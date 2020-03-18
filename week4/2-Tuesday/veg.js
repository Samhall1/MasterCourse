

const input = document.getElementById("input");
const button = document.getElementById("submit");
let list = document.getElementsByTagName("ul")[0];
// let list = document.getElementById("list");
// let list = document.querySelector("ul");
// let list = document.querySelector("#list");
button.addEventListener("click", ()=> {
    console.log("button clicked");
    let listItem = document.createElement("li");
    // console.log(listItem);
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value ="";
});
// const showhidebtn = document.getElementById("showhide-btn");
// showhidebtn.addEventListener("click", () => {
//     if(list.style.display == "none") {
//     } else {
//         list.style.display = 'none';
//         showhidebtn.textContent = 'show';
//     }
// });
const listItem = document.getElementsByTagName("li")
for(let i = 0; i<listItem.length; i++){
    listItem[i].addEventListener("mouseover", ()=>{
        listItem[i].textContent =listItem[i].textContent.toUpperCase(); });
    listItem[i].addEventListener("mouseout", ()=>{
        listItem[i].textContent =listItem[i].textContent.toLowerCase(); });
}
document.addEventListener("click",(event)=> {
    console.log(event);
    console.log(event.target);
});