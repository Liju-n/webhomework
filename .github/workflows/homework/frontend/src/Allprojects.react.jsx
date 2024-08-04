import React from 'react'
import ReactDOM from 'react-dom/client'
import * as axios from 'axios'

function Allprojects() {
    var par = document.createElement('p');
    par.textContent = '项目列表';
    document.body.appendChild(par);
    const client = axios.default;
    var projects = [];
    client.get('http://127.0.0.1:7002/allprojects/all')
        .then(response => {
            projects = response.data;
            console.log(projects)

            for (let i = 0; i < projects.length; i++) {
                var link = document.createElement('a');
                link.href = '../html/task_other.html?pname=' + encodeURIComponent(projects[i]);
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

export default Allprojects;