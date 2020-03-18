//Call back function

const myPosts = [
    {title: 'Post One', body: 'This is post one body'},
    {title: 'Post two', body: 'This is post two body'}
    ];

function getPosts() {
    setTimeout( () => {
        myPosts.forEach( (post) => {
            console.log(post.title);
    });
        console.log(myPosts);
    }, 1000);
}
function createPost(post, callback) {         // 2 parameters post and callback < is a function you can call it anything you like as long as you call it later on but callback is a good start point(does exactly what it says on the tin)
    setTimeout( () => {
        myPosts.push(post);
            callback();
            //callback is representing getPosts();
    }, 5000);
}



createPost({title: 'post 3', body: 'this is the post 3 body'}, getPosts);//2 values first is a object 2nd is a function seperated by a ,
