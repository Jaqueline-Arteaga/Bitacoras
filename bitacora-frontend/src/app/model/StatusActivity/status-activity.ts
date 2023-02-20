import { Activity } from "../Activity/activity";

export class StatusActivity {
    idStatusActivitie?:number;
    authorized?:Boolean;
    activities?:Set<Activity>;    
}
