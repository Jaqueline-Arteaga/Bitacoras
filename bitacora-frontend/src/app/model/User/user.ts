import { Area } from "../Area/area";
import { ProjectUser } from "../ProjectUser/project-user";


export class User {
    idUser?:number;
    name?:string;
    pLastName?:string;
    mLastName?:string;
    email?:string;
    password?:string;
    hoursWorking?:number;
    area?:Area;  
    projectsUser?:Set<ProjectUser>; 

}
