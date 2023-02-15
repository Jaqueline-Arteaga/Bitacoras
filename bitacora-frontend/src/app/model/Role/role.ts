import { ProjectManager } from "../ProjectManager/project-manager";

export class Role {
    idRole?:number;
    description?:string;
    projectsManager?:Set<ProjectManager>;    
}
