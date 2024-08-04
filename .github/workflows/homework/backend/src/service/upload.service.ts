import { Provide } from "@midwayjs/core";

@Provide()
export class UploadService {
    public async Upload(fileData) {
        const fs = require('fs');
        //const filename = Date.now().toString(36) + Math.random().toString(36).substring(2);
        const filePath = `filedata/example`;
        fs.writeFile(filePath, fileData.data, (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Random data written to the file.');
            }
        });
    }
}



export default UploadService;