import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { AuthenticatorService } from 'src/app/services/Authenticator/authenticator.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name?:string="Dumy name";

  constructor(private log:AuthenticatorService,private router: Router) {
  }

  logout(){
    this.log.logout();
    this.router.navigate(["/binnacle/login"]);
  }

  goToFormUsers() {
    this.router.navigateByUrl("/binnacle/user");
  }


}
