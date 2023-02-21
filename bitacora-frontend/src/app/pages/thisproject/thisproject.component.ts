import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/Project/project';
import { ProjectService } from 'src/app/services/Project/project.service';


@Component({
  selector: 'app-thisproject',
  templateUrl: './thisproject.component.html',
  styleUrls: ['./thisproject.component.scss']
})
export class ThisprojectComponent {

  project?:Project=new Project();

  constructor(private projectService:ProjectService, private router:Router, private activatedRoute:ActivatedRoute){
  }

  ngOnInit(){
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      project=>{
        let idProject:number=project['idProject'];
        
        if (idProject) {         
          console.log(this.projectService.getProjectById(idProject))
          this.projectService.getProjectById(idProject).subscribe(
            project=>this.project=project
          )
        }
      }
    )
  }

}
