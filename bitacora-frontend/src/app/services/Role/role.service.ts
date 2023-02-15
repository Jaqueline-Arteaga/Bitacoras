import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/model/Role/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private url:string="http://localhost:8080/ROLES"
  constructor(private http:HttpClient) { }

  saveRole(role:Role):Observable<Role>{
    return this.http.post<Role>(this.url,role);
  }

  listRoles():Observable<Set<Role>>{
    return this.http.get<Set<Role>>(this.url);
  }

}
