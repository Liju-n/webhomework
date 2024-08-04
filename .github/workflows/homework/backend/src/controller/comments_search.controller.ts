import { Controller, Inject, Get, Query } from "@midwayjs/core";
import SearchcommentsService from "../service/comments_search.service";

@Controller('/commentssearch')
export class SearchcommentsController {
    @Inject()
    searchcommentsService: SearchcommentsService

    @Get('/search')
    public async searchcomments(@Query("pname") pname: string, @Query("tname") tname: string) {
        var temp = await this.searchcommentsService.Searchcomments(pname, tname);
        return temp;
    }
}