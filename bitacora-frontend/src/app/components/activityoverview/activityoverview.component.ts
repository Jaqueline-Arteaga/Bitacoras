import { Component, Input } from '@angular/core';
import { Activity } from 'src/app/model/Activity/activity';

@Component({
  selector: 'app-activityoverview',
  templateUrl: './activityoverview.component.html',
  styleUrls: ['./activityoverview.component.scss']
})
export class ActivityoverviewComponent {
  @Input()
  activities?:Set<Activity>;

}
