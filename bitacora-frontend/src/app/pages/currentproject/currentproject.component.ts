import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/Project/project';
import { User } from 'src/app/model/User/user';
import { ServicioGlobalService } from 'src/app/services/Globales/servicio-global.service';
import { ProjectService } from 'src/app/services/Project/project.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-currentproject',
  templateUrl: './currentproject.component.html',
  styleUrls: ['./currentproject.component.scss']
})
export class CurrentprojectComponent {

  project?: Project;
  user?: User = {
    "name": "Baby Koopa"
  };

  constructor(private projectService: ProjectService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute, private global:ServicioGlobalService) {
  }

  ngOnInit(){
    this.cargar();
  }


  cargar() {
    
    this.userService.getUserById(1).subscribe(
      user => this.user = user);
    this.project=this.global.getProject();   
    console.log(this.global.getProject()) 
  }



}
