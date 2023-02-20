import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/model/Activity/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private url:string="http://localhost:8080/ACTIVITIES/"
  constructor(private http:HttpClient) { }

  saveActivity(activity?:Activity):Observable<Activity>{
    return this.http.post<Activity>(this.url,activity);
  }

  listActivity():Observable<Set<Activity>>{
    return this.http.get<Set<Activity>>(this.url);
  }

  getActivityById(id:number):Observable<Activity>{
    return this.http.get<Activity>(this.url + `${id}`);
  }

  updateActivity(activity?:Activity):Observable<Activity>{
    return this.http.put<Activity>(this.url,activity);
  }

}
