import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/Project/project';
import { ProjectService } from 'src/app/services/Project/project.service';

@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.scss']
})
export class ProjectformComponent {
  project?:Project=new Project();

  constructor(private projectService:ProjectService, private router:Router, private activatedRoute:ActivatedRoute){
  }

  create():void{    
    this.projectService.saveProject(this.project).subscribe(
      ()=>this.router.navigate(["/binnacle/projects"])
    )
  }

}
