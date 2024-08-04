import { Controller, Inject, Post, Query } from "@midwayjs/core";
import { AddcommentsService } from "../service/addcomments.service";

@Controller("/addcomments")
export class AddcommentsController {
    @Inject()
    addcommentsService: AddcommentsService

    @Post('/add')
    public async addcomments(@Query("pname") pname: string, @Query("tname") tname: string, @Query("comments") comments: string) {
        const inputcomments: string = comments;
        let result = await this.addcommentsService.addcomments(pname, tname, inputcomments);
        return result;
    }
}