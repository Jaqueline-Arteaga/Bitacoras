import { Component } from '@angular/core';
import { Activity } from 'src/app/model/Activity/activity';
import { User } from 'src/app/model/User/user';
import { ActivityService } from 'src/app/services/Activity/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  activities?:Set<Activity>;
  user?:User={
    "name":"Baby Koopa"
  };

  dates={
    "date1": new Date(),
    "date2": new Date()
  }
  constructor(private activityService:ActivityService){}

  ngOnInit():void{    
    this.activityService.listActivity().subscribe(
      activities=>this.activities=activities
    );
  }
  filtrar(){
    
  }

  
}
