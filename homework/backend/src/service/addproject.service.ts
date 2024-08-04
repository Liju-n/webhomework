import { Provide } from "@midwayjs/core";
import { Project, project_arr } from "../model/project.model";

@Provide()
export class AddprojectService {
    public async Addproject(project: Project) {
        project_arr.push(project);
    }
}