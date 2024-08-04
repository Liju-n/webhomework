export class Task {

    private name: string;

    is_finsh: boolean;

    comments: Array<string>;

    fileurl: string;

    constructor(name: string) {
        this.name = name;
        this.is_finsh = false;
        this.comments = [];
        this.fileurl = '';
    }

    public getName() {
        return this.name;
    }

    public task_finish() {
        this.is_finsh = true;
    }

    public addcomments(comment: string) {
        this.comments.push(comment);
    }

    public getcomments() {
        return this.comments;
    }

    public geturl() {
        return this.fileurl;
    }

    public addurl(url: string) {
        this.fileurl = url;
    }
}