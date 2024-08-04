import React from 'react'
import ReactDOM from 'react-dom/client'
import * as axios from 'axios'

function Addtask() {
    const client = axios.default;
    const urlParams = new URLSearchParams(window.location.search);
    const pname = urlParams.get('pname');
    return (
        <>
            <div>
                <p>任务添加</p>
            </div>
            <div>
                <form action='/log' method='post' id='addtaskform'>
                    任务名: <input type='text' name='tname' id='tname' /><br />
                    <button type='button' onClick={() => {
                        const inputtname = document.getElementById("tname").value;
                        client.post('http://127.0.0.1:7002/addtask/add?tname=' + encodeURIComponent(inputtname) + '&pname=' + encodeURIComponent(pname))
                            .then(response => {
                                console.log("创建成功", response);
                                window.history.back();
                            })
                            .catch(error => {
                                console.error('创建失败：', error.response.data);
                            })
                    }}>
                        创建
                    </button>
                </form>
            </div>
        </>
    )
}

export default Addtask;