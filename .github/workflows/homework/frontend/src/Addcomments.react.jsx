import React from 'react'
import ReactDOM from 'react-dom/client'
import * as axios from 'axios'

function Addcomments() {
    const client = axios.default;
    const urlParams = new URLSearchParams(window.location.search);
    const pname = urlParams.get('pname');
    const tname = urlParams.get('tname')
    return (
        <>
            <div>
                <p>添加评论</p>
                <form action='/log' method='post' id='addcommentsform'>
                    输入评论: <input type='text' name='inputcomments' id='inputcomments' /><br />
                    <button type='button' onClick={() => {
                        const inputcomments = document.getElementById("inputcomments").value;
                        client.post('http://127.0.0.1:7002/addcomments/add?pname=' + encodeURIComponent(pname) + '&tname=' + encodeURIComponent(tname) + '&comments=' + encodeURIComponent(inputcomments))
                            .then(response => {
                                console.log("添加成功", response);
                                window.history.back();
                            })
                            .catch(error => {
                                console.log("添加失败：", error.response.data);
                            })
                    }}>
                        完成
                    </button>
                </form>
            </div>
        </>
    )
}

export default Addcomments;