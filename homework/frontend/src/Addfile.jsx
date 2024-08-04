import axios from "axios";
((doc) => {
    const oProgress = doc.querySelector('#uploadProgress');
    const oUploader = doc.querySelector('#videoUploader');
    const oInfo = doc.querySelector('#uploadInfo');
    const oBtn = doc.querySelector('#uploadBtn');

    let uploadedSize = 0;

    const init = () => {
        bindEvent();
    }

    function bindEvent() {
        oBtn.addEventListener('click', uploadVideo, false);
    }

    async function uploadVideo() {
        const { files: [file] } = oUploader;
        if (!file) {
            oInfo.innerText = UPLOAD_INFO['NO_FILE'];
            return;
        }
        const { name, type, size } = file;
        const fileName = new Date().getTime() + '_' + name;
        let uploadedResult = null;
        oProgress.max = size;
        oInfo.innerText = '';
        const urlParams = new URLSearchParams(window.location.search);
        const pname = urlParams.get('pname');
        const tname = urlParams.get('tname');
        while (uploadedSize < size) {
            const fileChunk = file.slice(uploadedSize, uploadedSize + CHUNK_SIZE);
            const formData = createFormData({
                name,
                type,
                size,
                fileName,
                uploadedSize,
                pname,
                tname,
                file: fileChunk
            });

            try {
                uploadedResult = await axios.post(API.UPLOAD_VIDEO, formData);
            } catch (e) {
                oInfo.innerText = `${UPLOAD_INFO['UPLOAD_FAILED']}（${e.message}）`;
                return;
            }

            uploadedSize += fileChunk.size;
            oProgress.value = uploadedSize;
        }

        oInfo.innerText = UPLOAD_INFO['UPLOAD_SUCCESS'];
        oUploader.value = null;
    }
    function createFormData({
        name,
        type,
        size,
        fileName,
        uploadedSize,
        file
    }) {
        const fd = new FormData();

        fd.append('name', name);
        fd.append('type', type);
        fd.append('size', size);
        fd.append('fileName', fileName);
        fd.append('uploadedSize', uploadedSize);
        fd.append('file', file);

        return fd;
    }
    var mybutton1 = document.createElement('button');
    mybutton1.textContent = '返回';
    mybutton1.addEventListener("click", function () {
        window.history.back();
    })
    document.body.appendChild(mybutton1);
    var separator1 = document.createElement('br');
    document.body.appendChild(separator1);
    init();
})(document);