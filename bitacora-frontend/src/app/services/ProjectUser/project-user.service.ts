import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/model/Project/project';
import { ProjectUser } from 'src/app/model/ProjectUser/project-user';

@Injectable({
  providedIn: 'root'
})
export class ProjectUserService {
  private url:string="http://localhost:8081/api/PROJECT_USER"
  constructor(private http:HttpClient) { }

  saveProjectAssignment(projectUser:ProjectUser):Observable<ProjectUser>{
    return this.http.post<ProjectUser>(this.url,projectUser);
  }

  listAssignments():Observable<Set<ProjectUser>>{
    return this.http.get<Set<ProjectUser>>(this.url)
  }

  getProjectUserById(id:number):Observable<ProjectUser>{
    return this.http.get<ProjectUser>(this.url + `/${id}`);
  }

  

}
