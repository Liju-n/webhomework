import { Provide } from "@midwayjs/core";
import { project_arr } from "../model/project.model";

@Provide()
export class ShowprojectService {
    public async Showproject(uname: string) {
        var project_list = [];
        for (let i = 0; i < project_arr.length; i++) {
            if (project_arr[i].getcreater() === uname) {
                project_list.push(project_arr[i].getName());
            }
        }
        return project_list;
    }
}

export default ShowprojectService;