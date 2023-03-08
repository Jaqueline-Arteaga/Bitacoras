import { Area } from "../Area/area";
import { Dates } from "../Dates/dates";
import { ProjectUser } from "../ProjectUser/project-user";


export class Activity {
    idActivity!:number;
    name?:string;
    description?:string;
    notes?:string;
    date?:Dates;
    workingHours?:number;
    projectUser?:ProjectUser;    
    area?:Area;    
}
