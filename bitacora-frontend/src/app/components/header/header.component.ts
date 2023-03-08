import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User/user';
import { AuthenticatorService } from 'src/app/services/Authenticator/authenticator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  user?:User;

  constructor(private log:AuthenticatorService,private router: Router) {
  }

  logout(){
    this.log.logout();
    this.router.navigate(["/"]);
  }

}
