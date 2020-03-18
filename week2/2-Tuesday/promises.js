//new Promise is a javascript key word
//resolve() will run the .then if it is true
//reject() will run if the resolve() isnt true



const myPosts = [{title: 'Post One',body: 'This is post one body' },
                 {title: 'Post two',body: 'This is post two body'}];

function getPosts() {
    setTimeout( () => {
        myPosts.forEach((post) => {
            console.log(post.title);
        })
        console.log(myPosts);
    }, 1000);
}

function createPost(post) {
    return new Promise(  (resolve, reject) => {         //new Promise is a javascript key word, the promise is wrapping everything on the code
        setTimeout(() => {                              //This is a function and takes 2 parameters return new Promise (resolve, reject)
            myPosts.push(post);
            const error = true;                         //the current value of error is true if the value was false it would run
            if (!error) {                               //if there is no error, there is an error becaue error is set to true 
                resolve();                              //This will call the .then if it is true
            } else {                                    //This will run the reject() because its not true
                reject("Error something went wrong");   //inside the reject( ) you can input what ever you want
            }
        }, 2000);
    });
}
createPost({title: 'Post Three',body: 'this is the post three body'})
.then(getPosts).catch((e) => {                    //you can call this what ever you want to however (e) is the standard and is short for error
    console.log(e);                               //if it all runs well it will run the .then if it doesnt it will run the .catch(e)
});                                               