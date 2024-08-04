import { Provide } from "@midwayjs/core";
import { project_arr } from "../model/project.model";

@Provide()
export class AddcommentsService {
    public async addcomments(project: string, task: string, comments: string) {
        for (let j = 0; j < project_arr.length; j++) {
            if (project_arr[j].getName() === project) {
                for (let i = 0; i < project_arr[j].gettask().length; i++) {
                    if (project_arr[j].gettask()[i].getName() === task) {
                        project_arr[j].gettask()[i].addcomments(comments);
                    }
                }
            }
        }

    }
}