import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectManager } from 'src/app/model/ProjectManager/project-manager';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {
  private url:string="http://localhost:8080/PROJECT_MANAGER"
  constructor(private http:HttpClient) { }

  saveProjectAssignment(projectManager:ProjectManager):Observable<ProjectManager>{
    return this.http.post<ProjectManager>(this.url,projectManager);
  }

  listAssignments():Observable<Set<ProjectManager>>{
    return this.http.get<Set<ProjectManager>>(this.url)
  }

}
