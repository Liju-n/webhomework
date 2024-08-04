import { Controller, Inject, Post, Query } from "@midwayjs/core";
import { AddtaskService } from "../service/addtask.service";
import { project_arr } from "../model/project.model";
import { Task } from "../model/task.model";

@Controller("/addtask")
export class AddtaskController {
    @Inject()
    addtaskService: AddtaskService

    @Post('/add')
    public async addtask(@Query("tname") name: string, @Query("pname") pname: string) {
        const task: Task = new Task(name);
        var project;
        for (let i = 0; i < project_arr.length; i++) {
            if (project_arr[i].getName() === pname) {
                project = project_arr[i];
            }
        }
        let result = await this.addtaskService.addtask(project, task);
        return result;
    }
}