import { Controller, Inject, Get } from "@midwayjs/core";
import AllprojectService from "../service/allprojects.service";
//import { project_arr } from "../model/project.model";

@Controller('/allprojects')
export class AllprojectController {
    @Inject()
    allprojectService: AllprojectService

    @Get('/all')
    async allproject() {
        var temp = await this.allprojectService.Allproject();
        return temp;

    }
}