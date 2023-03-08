import { Injectable } from '@angular/core';
import { Project } from 'src/app/model/Project/project';
import { User } from 'src/app/model/User/user';

@Injectable({
  providedIn: 'root'
})
export class ServicioGlobalService {
  private project?:Project;
  private user?:User;

  constructor() { }

  getProject(){
    return this.project;
  }

  setProject(project:Project){
    this.project=project;
  }


}
