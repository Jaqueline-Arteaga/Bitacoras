import { Component } from '@angular/core';
import { Project } from 'src/app/model/Project/project';
import { ProjectService } from 'src/app/services/Project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects:Set<Project> = new Set();
  

  constructor(private projectService:ProjectService){}

  ngOnInit():void{    
    this.projectService.listProjects().subscribe(
      projects=>this.projects=projects
    );
  }

}
