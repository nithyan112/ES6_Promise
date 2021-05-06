const posts = [{title:'post one',body:'this is post one'},{title:'post two',body:'this is post two'}];


function createPost(post){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);
            resolve();

        },2000)
    })
}

function getPosts(){
    let output ='';
    setTimeout(function(){
        posts.forEach(function(post){
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML=output;
    },1000)
}
createPost({title:'post three',body:'this.post three'}).then(getPosts);