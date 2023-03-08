import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/Project/project';
import { ProjectUser } from 'src/app/model/ProjectUser/project-user';
import { User } from 'src/app/model/User/user';
import { ServicioGlobalService } from 'src/app/services/Globales/servicio-global.service';
import { ProjectService } from 'src/app/services/Project/project.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectUser:ProjectUser= new ProjectUser();
  projects?:Set<Project> = new Set();
  user?:User=new User();
  
  

  constructor(private projectService:ProjectService, private userService:UserService,private router:Router,private global:ServicioGlobalService){}

  ngOnInit():void{  
      this.cargar();
    }

    cargar(){
      this.userService.getUserById(1).subscribe(
        user=>this.user=user);

      this.projectService.getProjectByUser("e-pesanchez@neoris.com").subscribe(
        projects=>{this.projects=projects}
      )
    }

    projectClic(project:Project){
      console.log(project)
      this.global.setProject(project);
      this.router.navigateByUrl('/currentproject');
    }


  }


