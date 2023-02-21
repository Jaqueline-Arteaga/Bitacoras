import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from 'src/app/model/Area/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private url:string="http://localhost:8080/api/AREAS"
  constructor(private http:HttpClient) { }

  saveArea(area?:Area):Observable<Area>{
    return this.http.post<Area>(this.url,area);
  }

  getAreaById(id?:number):Observable<Area>{
    return this.http.get<Area>(this.url + `/${id}`);
  }

  listAreas():Observable<Set<Area>>{
    return this.http.get<Set<Area>>(this.url);
  }

  updateArea(area?:Area):Observable<Area>{
    return this.http.put<Area>(this.url+`/${area?.idArea}`,area);
  }

  deleteArea(id?:number):Observable<Area>{
    return this.http.delete<Area>(this.url+`/${id}`);
  }
}
