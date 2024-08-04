import { Provide } from "@midwayjs/core";
import { project_arr } from "../model/project.model";

@Provide()
export class SearchtaskService {
    public async Searchtask(pname: string) {
        var task_list = [];
        for (let i = 0; i < project_arr.length; i++) {
            if (project_arr[i].getName() === pname) {
                for (let j = 0; j < project_arr[i].gettask().length; j++) {
                    task_list.push(project_arr[i].gettask()[j].getName());
                }
            }
        }
        return task_list;
    }
}

export default SearchtaskService;