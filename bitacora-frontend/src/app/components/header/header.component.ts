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
  formActivity() {
    this.router.navigateByUrl("/binnacle/activity");
  }
}
