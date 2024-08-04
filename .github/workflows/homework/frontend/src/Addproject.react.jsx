import React from 'react'
import ReactDOM from 'react-dom/client'
import * as axios from 'axios'

function Addproject() {
    const client = axios.default;
    const urlParams = new URLSearchParams(window.location.search);
    const uname = urlParams.get('user');
    console.log(uname);
    return (
        <>
            <div>
                <p>项目创建</p>
            </div>
            <div>
                <form action='/log' method='post' id='addprojectform'>
                    项目名：<input type='text' name='pname' id='pname' /><br />
                    <button type='button' onClick={() => {
                        const inputpname = document.getElementById("pname").value;
                        const urlParams = new URLSearchParams(window.location.search);
                        const uname = urlParams.get('user');
                        const postdata = { name: inputpname, creater: uname };
                        client.post('http://127.0.0.1:7002/addproject/add?name=' + encodeURIComponent(inputpname) + '&creater=' + encodeURIComponent(uname))
                            .then(response => {
                                console.log("创建成功", response, postdata.name);
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

export default Addproject;