import { ProjectManager } from "../ProjectManager/project-manager";

export class Role {
    id?:number;
    description?:string;
    projectManagers?:Set<ProjectManager>;    
}
