import { BinnacleProject } from "../BinnacleProject/binnacle-project";
import { ProjectManager } from "../ProjectManager/project-manager";

export class Project {
    idProject?:number;    
    title?:string;
    description?:string;
    dateStart?:Date;
    dateEnd?:Date;
    projectsManager?:Set<ProjectManager>;
    binnaclesProjects?:Set<BinnacleProject>;
}
