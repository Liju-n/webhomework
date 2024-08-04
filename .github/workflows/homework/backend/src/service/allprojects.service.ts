import { Provide } from "@midwayjs/core";
import { project_arr } from "../model/project.model";

@Provide()
export class AllprojectService {
    public Allproject() {
        var project_name = [];
        for (let i = 0; i < project_arr.length; i++) {
            project_name.push(project_arr[i].getName());
        }
        return project_name;
    }
}

export default AllprojectService;