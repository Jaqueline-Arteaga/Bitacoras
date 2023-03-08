import { BinnacleProject } from "../BinnacleProject/binnacle-project";
import { Dates } from "../Dates/dates";
import { TypeArchive } from "../TypeArchive/type-archive";

export class Binnacle {
    idBinnacle?:number;
    name?:string;    
    archive?:string;
    binnaclesProjects?:Set<BinnacleProject>;
    date?:Dates;
    typeArchive?:TypeArchive;
}
