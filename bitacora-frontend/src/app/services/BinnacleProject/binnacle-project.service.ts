import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BinnacleProject } from 'src/app/model/BinnacleProject/binnacle-project';

@Injectable({
  providedIn: 'root'
})
export class BinnacleProjectService {
  private url:string="http://localhost:8080/api/BINNACLES_PROJECTS"
  constructor(private http:HttpClient) { }

  saveBinnacleProject(binnacleProject:BinnacleProject):Observable<BinnacleProject>{
    return this.http.post<BinnacleProject>(this.url,binnacleProject);
  }

  listBinnacleProject():Observable<Set<BinnacleProject>>{
    return this.http.get<Set<BinnacleProject>>(this.url);
  }
}
