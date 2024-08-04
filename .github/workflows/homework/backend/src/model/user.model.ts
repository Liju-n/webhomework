export class user {
    private name: string;

    pwd: string;

    constructor(name: string, pwd: string) {
        this.name = name;
        this.pwd = pwd;
    }

    public getname() {
        return this.name;
    }
    public getpwd() {
        return this.pwd;
    }
}

export var user_arr = []