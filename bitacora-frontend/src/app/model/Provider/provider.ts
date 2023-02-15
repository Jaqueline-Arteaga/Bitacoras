import { Activity } from "../Activity/activity";

export class Provider {
    idProvider?:number;
    name?:string;
    activities?:Set<Activity>;
}
