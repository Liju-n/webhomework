import { Controller, Inject, Post, Query } from "@midwayjs/core";
import { RegisterService } from "../service/register.service";
import { user } from "../model/user.model";

@Controller("/register")
export class LoginController {
    @Inject()
    registerService: RegisterService

    @Post('/save')
    public async save(@Query("uname") uname: string, @Query("upwd") upwd: string) {
        const uuser: user = new user(uname, upwd);
        await this.registerService.register(uuser);
        return uname;
    }

}