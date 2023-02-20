import { Provider } from "@angular/core";
import { Area } from "../Area/area";
import { ProjectManager } from "../ProjectManager/project-manager";
import { StatusActivity } from "../StatusActivity/status-activity";

export class Activity {
    idActivitie?:number;
    name?:string;
    description?:string;
    notes?:string;
    dateStart?:Date;
    dateEnd?:Date;
    workingHours?:number;
    projectManager?:ProjectManager;
    provider?:Provider;
    area?:Area;
    statusActivitie?:StatusActivity;
}
