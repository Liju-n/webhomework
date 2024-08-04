import React from 'react'
import ReactDOM from 'react-dom/client'

function Taskboard() {
    const urlParams = new URLSearchParams(window.location.search);
    const uname = urlParams.get('user');
    console.log(uname);
    return (
        <>
            <div>
                <p>敏捷看板</p>
            </div>
            <div>
                <button type="button" onClick={() => {

                    window.location.href = '../html/Addproject.html?user=' + encodeURIComponent(uname);;
                }

                }>
                    项目创建
                </button>
                <button type="button" onClick={() => {
                    const urlParams = new URLSearchParams(window.location.search);
                    const uname = urlParams.get('user');
                    window.location.href = '../html/Myproject.html?user=' + encodeURIComponent(uname);;
                }}>
                    我的项目
                </button>
                <button type="button" onClick={() => {
                    const urlParams = new URLSearchParams(window.location.search);
                    const uname = urlParams.get('user');
                    window.location.href = '../html/Allprojects.html?user=' + encodeURIComponent(uname);;
                }}>
                    项目查看
                </button>
            </div>
        </>
    )
}

export default Taskboard