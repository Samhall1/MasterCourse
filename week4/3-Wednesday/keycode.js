
// const input = document.getElementById("myInput");

document.addEventListener("keypress", function(){
    console.log("Button Pressed");
    let key = event.key;
    let code = event.code;
    let which = event.which;
    console.log(key);
    console.log(code);
    console.log(which);
   
});

// function keycode(){
//     let key = event.keyCode;
//     console.log(key);
// }


document.addEventListener("keypress", function(){

    console.log("button press");
    const li = document.getElementById("key");
    li.textContent = event.key;

    const liv = document.getElementById("code");
    liv.textContent = event.code;

    const lii = document.getElementById("which");
    lii.textContent = event.which;
    keycode.textContent = event.which;
    
});





