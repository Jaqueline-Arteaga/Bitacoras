import { BinnacleProject } from "../BinnacleProject/binnacle-project";
import { ProjectManager } from "../ProjectManager/project-manager";

export class Project {
    idProject?:number;
    name?:string;
    title?:string;
    description?:string;
    workingHours?:number;
    projectsManager?:Set<ProjectManager>;
    binnaclesProjects?:Set<BinnacleProject>;
}
