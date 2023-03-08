import { BinnacleProject } from "../BinnacleProject/binnacle-project";
import { Dates } from "../Dates/dates";
import { ProjectUser } from "../ProjectUser/project-user";
import { RestGlobal } from "../RestGlobal/rest-global";
import { RestProject } from "../RestProject/rest-project";

export class Project {
    idProject?:number;    
    title?:string;
    description?:string;
    dateStart?:Dates;
    dateEnd?:Dates;
    hours?:number;
    projectsUser?:Set<ProjectUser>;
    binnaclesProjects?:Set<BinnacleProject>;
    restGlobals?:Set<RestGlobal>;
    restProjects?:Set<RestProject>;
}
