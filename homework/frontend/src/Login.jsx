import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import * as util_request from './request/util.request'
import * as websocket_client from './request/client.websocket'
import * as axios from 'axios'

function Login() {
    const client = axios.default
    return (
        <>
            <div>
                <p>用户登录</p>
            </div>
            <div>
                <form action='/log' method="post" id="logform">
                    姓名：<input type="text" name="uname" id="uname" /><br />
                    密码：<input type="password" name="upwd" id="upwd" /><br />
                    <button type="button" onClick={() => {
                        var inputname = document.getElementById("uname").value;
                        var inputpwd = document.getElementById("upwd").value;
                        var is_login = 0;
                        client.post('http://127.0.0.1:7002/login/verify?uname=' + encodeURIComponent(inputname) + '&upwd=' + encodeURIComponent(inputpwd))
                            .then(response => {
                                // 处理成功响应
                                if (response.data == true) {
                                    is_login = 1;
                                    console.log('登录成功:', response);
                                }
                                else {
                                    console.log(response);
                                }
                                console.log(is_login)
                                if (is_login == 1) {
                                    window.location.href = '../html/Taskboard.html?user=' + encodeURIComponent(inputname);
                                }
                            })
                            .catch(error => {
                                // 处理错误
                                console.error('登录失败:', error.response);
                            });

                    }}>
                        登录
                    </button>
                    <button type="button" onClick={() => {
                        var inputname = document.getElementById("uname").value;
                        var inputpwd = document.getElementById("upwd").value;
                        websocket_client.send(inputname)
                        websocket_client.send(inputpwd)
                        client.post('http://127.0.0.1:7002/register/save?uname=' + encodeURIComponent(inputname) + '&upwd=' + encodeURIComponent(inputpwd))
                            .then(response => {
                                console.log('注册成功', response)
                            })
                            .catch(error => {
                                console.error('注册失败')
                            });
                    }}>
                        注册
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login