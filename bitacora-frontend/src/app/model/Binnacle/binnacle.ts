import { BinnacleProject } from "../BinnacleProject/binnacle-project";

export class Binnacle {
    idBinnacle?:number;
    name?:string;
    type?:string;
    archive?:string;
    binnaclesProjects?:Set<BinnacleProject>;
}
