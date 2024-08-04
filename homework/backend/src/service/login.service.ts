import { Provide } from "@midwayjs/core";
import { user, user_arr } from "../model/user.model";

@Provide()
export class LoginService {
    public async login(user: user) {
        for (let i = 0; i < user_arr.length; i++) {
            if (user.getname() == user_arr[i].getname() && user.getpwd() == user_arr[i].getpwd()) {
                return true;
            }
        }
        return false;
    }
}