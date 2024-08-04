import { Provide } from "@midwayjs/core";
import { user } from "../model/user.model";
import { user_arr } from "../model/user.model";

@Provide()
export class RegisterService {
    public async register(user: user) {
        user_arr.push(user);
    }
}