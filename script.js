// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => displayUser(json))
//     .catch(error=>console.error())

// function displayUser(users) {
//     const usersName = users.map(user => user.username)
//     const ul = document.getElementById('user-container')
//     for (let i = 0; i < usersName.length; i++) {
//         let singleUser = usersName[i]
//         let li = document.createElement('li')
//         li.innerText = singleUser;
//         ul.appendChild(li)
//     }
// }

////////////////////////////////

// document.getElementById('submit').addEventListener('click', function () {
//     const title = document.getElementById('title').value;
//     const bodyContant = document.getElementById('body-contant').value;
//     const post={
//         title:title,
//         body: bodyContant
//     }
//     catchPostContant(post)

// })

// function catchPostContant(postInfo) {

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(postInfo),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => console.log(data));
// }


//////////////////////////////////////////

// fetch('https://www.boredapi.com/api/activity/')
// .then((rasponse)=> rasponse.json())
// .then((data)=>doSomething(data))

// function doSomething(data){
//     document.getElementById('do-task').innerText=data.activity;
//     document.getElementById('do-link').innerText=data.link;
    
// }

//////////////////////////////

//Weather Project

fetch('https://jsonplaceholder.typicode.com/comments')
.then((response)=> response.json())
.then((data)=>diplayItem(data))

function diplayItem(comments){
    const comment=comments.map(comment=>comment.email)
    const ul=document.getElementById('display-container')
    for(let i=0; i<comment.length; i++){
        const email=comment[i]
        li=document.createElement('li')
        li.innerText=email
        ul.appendChild(li)
    }
    
}