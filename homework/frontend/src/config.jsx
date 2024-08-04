// config.js
// 导出一些常量，包括上传信息、允许上传的文件类型、块大小和上传接口的URL
// 这些常量将在前端和后端代码中使用
const BASE_URL = 'http://172.0.0.1:8000/';

export const UPLOAD_INFO = {
    'NO_FILE': '请先选择文件',
    'INVALID_TYPE': '不支持该类型文件上传',
    'UPLOAD_FAILED': '上传失败',
    'UPLOAD_SUCCESS': '上传成功'
}

export const ALLOWED_TYPE = {
    'video/mp4': 'mp4',
    'video/ogg': 'ogg'
}

export const CHUNK_SIZE = 64 * 1024;

export const API = {
    UPLOAD_VIDEO: BASE_URL + 'upload_video'
}
