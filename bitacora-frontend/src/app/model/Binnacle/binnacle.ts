import { BinnacleProject } from "../BinnacleProject/binnacle-project";

export class Binnacle {
    id?:number;
    name?:string;
    type?:string;
    archive?:string;
    binnacleProjects?:Set<BinnacleProject>;
}
