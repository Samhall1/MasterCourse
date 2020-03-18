/* Async:
defines a function/method as asynchronous

Await:
waits for the code to finish processing */

//You use this when using react and node

//A function only runs when you call the function

//Can be used if the conection is slow or the data from the server is slow 

const myPosts = [{
        title: 'Post One',
        body: 'This is post one body'
    },
    {
        title: 'Post two',
        body: 'This is post two body'
    }
];

function getPosts() {
    setTimeout(() => {
        myPosts.forEach((post) => {
            console.log(post.title);
        })
        console.log(myPosts);
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            myPosts.push(post)
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("Error something went wrong");
            }
        }, 2000);
    });
}
async function init() {                                                                     //2 new key words async and await
    await createPost({title: 'Post Three', body: 'this is the post three body'  });         //Set up async on a function you are going to use
    getPosts();                                                                             //await < This will tell javascript to wait for this to finish then run the next step 
                                                                                            //you need both await and async to work together to enable them to work 
}                                                                                           //async is starting the function off

init();         //This is calling the function init().


