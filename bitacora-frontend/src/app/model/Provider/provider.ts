import { Activity } from "../Activity/activity";

export class Provider {
    id?:number;
    name?:string;
    activities?:Set<Activity>;
}
