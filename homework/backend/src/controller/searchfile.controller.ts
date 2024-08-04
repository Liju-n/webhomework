import { Controller, Inject, Get, Query } from "@midwayjs/core";
import SearchfileService from "../service/searchfile.service";

@Controller('/filesearch')
export class SearchtaskController {
    @Inject()
    searchfileService: SearchfileService

    @Get('/search')
    public async searchfile(@Query("pname") pname: string, @Query("tname") tname: string) {
        await this.searchfileService.Searchfile(pname, tname)
            .then(response => {
                var temp = response;
                return temp;
            });

    }
}