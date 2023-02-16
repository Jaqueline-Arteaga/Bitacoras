import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/model/Project/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private url:string="http://localhost:8080/PROJECTS/"
  constructor(private http:HttpClient) { }

  saveProject(project?:Project):Observable<Project>{
    return this.http.post<Project>(this.url,project);
  }

  getProjectById(id?:number):Observable<Project>{
    return this.http.get<Project>(this.http +`/${id}`);
  }

  listProjects():Observable<Set<Project>>{
    return this.http.get<Set<Project>>(this.url);
  }

  updateProject(project:Project):Observable<Project>{
    return this.http.put<Project>(this.url + `/${project.idProject}`,project);
  }

  deleteProject(id:number):Observable<Project>{
    return this.http.delete<Project>(this.url + `/${id}`)
  }


}
