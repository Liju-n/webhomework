import { Provide } from "@midwayjs/core";
import { project_arr } from "../model/project.model";

@Provide()
export class SearchfileService {
    public async Searchfile(pname: string, tname: string) {
        var fileurl = '';
        for (let i = 0; i < project_arr.length; i++) {
            if (project_arr[i].getName() === pname) {
                for (let j = 0; j < project_arr[i].gettask().length; j++) {
                    if (project_arr[i].gettask()[j].getName() === tname) {
                        fileurl = project_arr[i].gettask()[j].geturl();
                    }
                }
            }
        }
        fileurl = 'upload_temp'
        return fileurl;
    }
}

export default SearchfileService;