import { Task } from "./task.model";

export class Project {

    private name: string;

    creater: string;

    task: Array<Task>;

    constructor(name: string, creater: string) {
        this.name = name;
        this.creater = creater;
        this.task = [];
    }

    public getName() {
        return this.name;
    }

    public getcreater() {
        return this.creater;
    }

    public gettask() {
        return this.task;
    }

    public addtask(add_task: Task) {
        this.task.push(add_task);
    }
}

export var project_arr = [];