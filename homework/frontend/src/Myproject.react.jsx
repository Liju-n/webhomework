import React from 'react'
import ReactDOM from 'react-dom/client'
import * as axios from 'axios'

function Myproject() {
    const client = axios.default;
    var par = document.createElement('p');
    par.textContent = '我的项目';
    document.body.appendChild(par);
    const urlParams = new URLSearchParams(window.location.search);
    const uname = urlParams.get('user');
    console.log(uname);
    //需修改
    var projects = [];
    client.get('http://127.0.0.1:7002/showproject/show?uname=' + encodeURIComponent(uname))
        .then(response => {
            projects = response.data;
            console.log(projects);
            for (let i = 0; i < projects.length; i++) {
                var link = document.createElement('a');
                link.href = '../html/task_owner.html?pname=' + encodeURIComponent(projects[i]);
                link.textContent = projects[i];
                var separator = document.createElement('br');
                document.body.appendChild(link);
                document.body.appendChild(separator);
            }

        })
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

export default Myproject;