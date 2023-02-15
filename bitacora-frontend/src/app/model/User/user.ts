import { ProjectManager } from "../ProjectManager/project-manager";
import { Workstation } from "../Workstation/workstation";

export class User {
    idUser?:number;
    name?:string;
    pLastName?:string;
    mLastName?:string;
    mail?:string;
    password?:string;
    workstation?:Workstation;
    projectsManager?:Set<ProjectManager>;    
}
