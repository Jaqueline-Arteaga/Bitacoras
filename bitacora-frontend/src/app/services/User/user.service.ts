import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string="http://localhost:8080/USERS"
  constructor(private http:HttpClient) { }

  saveUser(user:User):Observable<User>{
    return this.http.get<User>(this.url);
  }

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.url + `/${id}`)
  }

  listUsers():Observable<Set<User>>{
    return this.http.get<Set<User>>(this.url)
  }

  updateUser(user:User):Observable<User>{
    return this.http.put<User>(this.url + `/${user.idUser}`,user);
  }

  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(this.url + `/${id}`)
  }

}
