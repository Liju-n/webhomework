import { Controller, Inject, Get, Query } from "@midwayjs/core";
import SearchtaskService from "../service/task_search.service";

@Controller('/tasksearch')
export class SearchtaskController {
    @Inject()
    searchtaskService: SearchtaskService

    @Get('/search')
    public async searchtask(@Query("pname") name: string) {
        var temp = await this.searchtaskService.Searchtask(name);
        return temp;
    }
}