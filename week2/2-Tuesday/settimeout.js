//Terminal 8


//This will wait 10 seconds and then run the code
//This is used with data 



// setTimeout( () => {
//     console.log("inside the setTimeout Function")
//     }, 10000);           


//----------------------------------------------------------------


// const myPosts = [
//     {title: 'Post One', body: 'This is post one body'},         //First value is an object 
//     {title: 'Post two', body: 'This is post two body'}          //Seconde value is an object
// ];

// function getPosts() {
//        console.log(myPosts);                             //myPosts[0].body;           //This will access the body part of the object
// }

// function createPost(post) {     
//     setTimeout( () => {
//         myPosts.push(post);         //.push() will add the function creatPost inside myPosts to the end
//         }, 5000);
                          
// }

// getPosts(); //Output: two posts         //It outputs an array and shows you the object indie the array
// createPost({title: 'post 3', body: 'this is the post 3 body'});     //You are passing 1 object inside your create post function
// getPosts(); //Output: three posts

//----------------------------------------------------------------------------------------------------

// const myPosts = [
//     {title: 'Post One', body: 'This is post one body'},         //First value is an object 
//     {title: 'Post two', body: 'This is post two body'}          //Seconde value is an object
// ];

// function getPosts() {
//     setTimeout( () => {
//         myPosts.forEach( (post) => {                    //.forEach only works on arrays it is a loop for the array  //(post) will be the value of the array
//             console.log(post.title);
//             });
//             console.log(myPosts);
//     }, 3000);                           //It doesnt matter what you input into time as long as it is greater than the createPost function time it will run both
// }

// function createPost(post) {
//     setTimeout( () => {
//         myPosts.push(post);
//     }, 2000);
// }

// getPosts();//if the time is set different on the later function it wont run, however if the time is set to the same it will 
// createPost({title: 'post three', body: 'this is the post 3 body'}); //this runs after 2 secs
// getPosts(); //this runs after 2 sec



//-----------------------------------------------------------------------------------------------------------------



