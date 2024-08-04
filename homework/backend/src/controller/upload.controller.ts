import { project_arr } from "../model/project.model";

const express = require('express');
const bodyParser = require('body-parser');
const uploader = require('express-fileupload');
const { extname, resolve } = require('path');
const { appendFileSync, writeFileSync } = require('fs');
const fs = require('fs');

const app = express();
const PORT = 8000;

// 设置中间件，解析请求的JSON数据和文件上传
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(uploader());

function isFileExisted(path_way) {
    return new Promise((resolve, reject) => {
        fs.access(path_way, (err) => {
            if (err) {
                fs.appendFileSync(path_way, '{"data":[],"total":0}', 'utf-8', (err) => {
                    if (err) {
                        return console.log('该文件不存在，重新创建失败！')
                    }
                    console.log("文件不存在，已新创建");
                });
                reject(false);
            } else {
                resolve(true);
            }
        })
    })
};

// 设置静态资源目录，用于存放上传的临时文件块
app.use('/', express.static('upload_temp'));

// 允许跨域访问
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST,GET');
    next();
});

// 处理文件上传的POST请求，对应的URL为/upload_video
app.post('/upload_video', (req, res) => {
    // 从请求体中获取传递的文件信息和文件块
    const { name, type, size, fileName, uploadedSize, pname, tname } = req.body;
    const { file } = req.files;

    console.log(type, size);

    if (!file) {
        // 检查是否传递了文件块，如果没有则返回错误信息
        res.send({
            code: 1001,
            msg: 'No file uploaded'
        });
        return;
    }



    const filename = fileName + extname(name);
    const filePath = resolve(__dirname, './upload_temp/');

    if (uploadedSize !== '0') {
        isFileExisted(filePath);

        // 文件已存在，则将当前文件块追加到已有的文件中
        appendFileSync(filePath, file.data);


        // 返回成功信息和视频URL
        res.send({
            code: 0,
            msg: 'Appended',
            url: 'http://127.0.0.1:8000/' + filename
        });

        return;
    }

    // 第一个文件块，创建一个新文件并写入当前块的数据
    writeFileSync(filePath, file.data);
    for (let j = 0; j < project_arr.length; j++) {
        if (project_arr[j].getName() === pname) {
            for (let i = 0; i < project_arr[j].gettask().length; i++) {
                if (project_arr[j].gettask()[i].getName() === tname) {
                    project_arr[j].gettask()[i].addurl(filePath);
                }
            }
        }
    }


    // 返回成功信息
    res.send({
        code: 0,
        msg: 'File is created'
    });
});

// 启动服务，监听指定端口
app.listen(PORT, () => {
    console.log('Server is running on ' + PORT);
});