import { ProjectUser } from "../ProjectUser/project-user";

export class Role {
    idRole?:number;
    description?:string;
    projectsUser?:Set<ProjectUser>;    
}
