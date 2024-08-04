import { Controller, Inject, Post, Query } from "@midwayjs/core";
import { AddprojectService } from "../service/addproject.service";
import { Project } from "../model/project.model";

@Controller("/addproject")
export class AddprojectController {
    @Inject()
    addprojectService: AddprojectService

    @Post('/add')
    public async addproject(@Query("name") name: string, @Query("creater") creater: string) {
        const proj: Project = new Project(name, creater);
        await this.addprojectService.Addproject(proj);
        return name;
    }

}
