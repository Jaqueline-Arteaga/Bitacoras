import { Dates } from "../Dates/dates";
import { Project } from "../Project/project";
import { Reason } from "../Reason/reason";

export class RestProject {
    idRestProject?:number;
    description?:string;
    hours?:number;
    date?:Dates;
    reason?:Reason;
    project?:Project;
}
