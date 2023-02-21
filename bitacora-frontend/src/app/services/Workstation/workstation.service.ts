import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workstation } from 'src/app/model/Workstation/workstation';

@Injectable({
  providedIn: 'root'
})
export class WorkstationService {
  private url:string="http://localhost:8080/api/WORKSTATIONS"
  constructor(private http:HttpClient) { }

  saveWorkstation(workStation:Workstation):Observable<Workstation>{
    return this.http.post<Workstation>(this.url,workStation);
  }

  listWorkstation():Observable<Set<Workstation>>{
    return this.http.get<Set<Workstation>>(this.url);
  }
}
