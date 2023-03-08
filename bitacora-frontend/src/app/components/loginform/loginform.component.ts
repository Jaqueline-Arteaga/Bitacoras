import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credential } from 'src/app/model/Credential/credential';
import { AuthenticatorService } from 'src/app/services/Authenticator/authenticator.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent {
  creds:Credential={email:'',password:''};
  
  constructor(private log:AuthenticatorService,private router:Router){

  }

  login(form: NgForm){       
    this.log.login(this.creds)
    .subscribe(response=>{
      this.router.navigate(['/projects'])
    })

  }

}
