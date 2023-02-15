import { Activity } from "../Activity/activity";

export class Area {
    id?:number;
    name?:string;
    activities?:Set<Activity>;
}
