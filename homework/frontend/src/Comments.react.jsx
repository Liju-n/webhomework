import React from 'react'
import ReactDOM from 'react-dom/client'
import * as axios from 'axios'

function Comments() {
    const client = axios.default;
    const urlParams = new URLSearchParams(window.location.search);
    const tname = urlParams.get('tname');
    const pname = urlParams.get('pname');
    var par = document.createElement('p');
    par.textContent = '评论列表';
    document.body.appendChild(par);
    client.get('http://127.0.0.1:7002/commentssearch/search?pname=' + encodeURIComponent(pname) + '&tname=' + encodeURIComponent(tname))
        .then(response => {
            const comments = response.data;
            console.log(comments);
            const ulElement = document.getElementById('commentsList') || document.createElement('ul');
            comments.forEach((comment) => {
                const liElement = document.createElement('li');
                liElement.textContent = comment;
                ulElement.appendChild(liElement);
            });
            document.body.appendChild(ulElement);
        })
    var mybutton = document.createElement('button');
    mybutton.textContent = "添加评论";
    mybutton.addEventListener("click", function () {
        window.location.href = '../html/Addcomments.html?pname=' + encodeURIComponent(pname) + '&tname=' + encodeURIComponent(tname);
    })
    document.body.appendChild(mybutton);
    var mybutton1 = document.createElement('button');
    mybutton1.textContent = '返回';
    mybutton1.addEventListener("click", function () {
        window.history.back();
    })
    document.body.appendChild(mybutton1);
    var separator1 = document.createElement('br');
    document.body.appendChild(separator1);
    return (
        <>
        </>
    )
}

export default Comments;