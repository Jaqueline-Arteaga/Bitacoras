import { Activity } from "../Activity/activity";
import { Project } from "../Project/project";
import { Role } from "../Role/role";
import { User } from "../User/user";

export class ProjectUser {//sirve cuando hafa click al proyecto
    idProjectUser?:number;
    user?:User;
    project?:Project;
    role?:Role;
    activities?:Set<Activity>;
}
