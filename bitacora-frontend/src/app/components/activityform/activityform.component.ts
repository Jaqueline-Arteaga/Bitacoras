import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/model/Activity/activity';
import { ActivityService } from 'src/app/services/Activity/activity.service';

@Component({
  selector: 'app-activityform',
  templateUrl: './activityform.component.html',
  styleUrls: ['./activityform.component.scss']
})
export class ActivityformComponent {
  activity?:Activity=new Activity();

  constructor(private activityService:ActivityService, private router:Router, private activatedRoute:ActivatedRoute){
  }

  create():void{
    this.activityService.saveActivity(this.activity).subscribe(
      ()=>this.router.navigate(["/binnacle/activities"])
    )
  }
}
