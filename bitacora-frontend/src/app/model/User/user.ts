import { ProjectManager } from "../ProjectManager/project-manager";
import { Workstation } from "../Workstation/workstation";

export class User {
    id?:number;
    name?:string;
    pLastName?:string;
    mLastName?:string;
    email?:string;
    password?:string;
    workstation?:Workstation;
    projectManagers?:Set<ProjectManager>;    
}
