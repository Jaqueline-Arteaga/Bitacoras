import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name?:string="Dumy name";

  constructor(private router: Router) {
  }
  goToProjects() {
    this.router.navigateByUrl("/binnacle/projects");
  }
  goToActivities() {
    this.router.navigateByUrl("/binnacle/activities");
  }
  goToFormProjects() {
    this.router.navigateByUrl("/binnacle/project");
  }
  goToFormActivity() {
    this.router.navigateByUrl("/binnacle/activity");
  }
  goToFormUsers() {
    this.router.navigateByUrl("/binnacle/user");
  }

}
