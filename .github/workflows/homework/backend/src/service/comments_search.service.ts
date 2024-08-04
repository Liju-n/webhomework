import { Provide } from "@midwayjs/core";
import { project_arr } from "../model/project.model";

@Provide()
export class SearchcommentsService {
    public async Searchcomments(pname: string, tname: string) {
        var comments_list = [];
        for (let i = 0; i < project_arr.length; i++) {
            if (project_arr[i].getName() === pname) {
                for (let j = 0; j < project_arr[i].gettask().length; j++) {
                    if (project_arr[i].gettask()[j].getName() === tname) {
                        for (let h = 0; h < project_arr[i].gettask()[j].getcomments().length; h++) {
                            comments_list.push(project_arr[i].gettask()[j].getcomments()[h]);
                        }
                    }
                }
            }
        }
        return comments_list;
    }
}

export default SearchcommentsService;