import { Controller, Inject, Post, Query } from "@midwayjs/core";
import { LoginService } from "../service/login.service";
import { user } from "../model/user.model";

@Controller("/login")
export class LoginController {
    @Inject()
    loginService: LoginService

    @Post('/verify')
    public async verify(@Query("uname") uname: string, @Query("upwd") upwd: string) {
        const uuser: user = new user(uname, upwd);
        let result = await this.loginService.login(uuser);
        return result;
    }

}