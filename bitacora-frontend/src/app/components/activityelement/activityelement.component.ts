import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/model/Activity/activity';
import { ActivityService } from 'src/app/services/Activity/activity.service';

@Component({
  selector: 'app-activityelement',
  templateUrl: './activityelement.component.html',
  styleUrls: ['./activityelement.component.scss']
})
export class ActivityelementComponent {
  @Input()
  activities?:Set<Activity>;

  constructor(private activityService:ActivityService,private router:Router){    
  }


  eliminar(id:number){
    this.activityService.deleteActivitie(id).subscribe();
  }

}
