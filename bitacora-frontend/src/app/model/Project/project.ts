import { BinnacleProject } from "../BinnacleProject/binnacle-project";
import { ProjectManager } from "../ProjectManager/project-manager";

export class Project {
    id?:number;
    name?:string;
    title?:string;
    description?:string;
    workingHours?:number;
    projectManagers?:Set<ProjectManager>;
    binnacleProjects?:Set<BinnacleProject>;
}
