import { Provide } from "@midwayjs/core";
import { Project } from "../model/project.model";
import { Task } from "../model/task.model";

@Provide()
export class AddtaskService {
    public async addtask(project: Project, task: Task) {
        project.addtask(task);
    }
}