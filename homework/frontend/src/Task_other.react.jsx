import React from 'react'
import ReactDOM from 'react-dom/client'
import * as axios from 'axios'

function Task_other() {
    const client = axios.default;
    var par = document.createElement('p');
    par.textContent = '任务列表';
    document.body.appendChild(par);
    const urlParams = new URLSearchParams(window.location.search);
    const pname = urlParams.get('pname');
    client.get('http://127.0.0.1:7002/tasksearch/search?pname=' + encodeURIComponent(pname))
        .then(response => {
            const tasks = response.data;
            console.log(tasks);
            tasks.forEach((task) => {
                var text = document.createElement('p');
                text.textContent = task;
                document.body.appendChild(text);
                var link = document.createElement('a');
                link.href = "javascript:void(0)";
                link.addEventListener("click", function () {
                    client.get('http://127.0.0.1:7002/filesearch/search?pname=' + encodeURIComponent(pname) + '&tname=' + encodeURIComponent(task))
                        .then(response => {
                            var srcurl = response.data;
                            console.log(response);
                            window.open('./asd.txt', '_self');
                        })
                })
                link.textContent = '附件';
                document.body.appendChild(link);
                var mybutton = document.createElement('button');
                mybutton.textContent = '任务评论';
                mybutton.addEventListener("click", function () {
                    window.location.href = '../html/Comments.html?pname=' + encodeURIComponent(pname) + '&tname=' + encodeURIComponent(task);
                })
                document.body.appendChild(mybutton);
                var separator = document.createElement('br');
                document.body.appendChild(separator);
            });

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

export default Task_other;