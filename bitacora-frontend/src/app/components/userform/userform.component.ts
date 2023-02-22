import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User/user';
import { UserService } from 'src/app/services/User/user.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent {

  user?:User=new User();
  

  constructor(private userService:UserService, private router:Router, private activatedRoute:ActivatedRoute){
  }

  

  create():void{    
    this.userService.savePostUser(this.user).subscribe(
      ()=>this.router.navigate(["/binnacle/projects"])
    )
  }

  


}
