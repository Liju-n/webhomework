import { Controller, Inject, Get, Query } from "@midwayjs/core";
import ShowprojectService from "../service/showproject.service";
//import { project_arr } from "../model/project.model";

@Controller('/showproject')
export class ShowprojectController {
    @Inject()
    showprojectService: ShowprojectService

    @Get('/show')
    public async showproject(@Query("uname") name: string) {
        var temp = await this.showprojectService.Showproject(name);
        return temp;
    }
}