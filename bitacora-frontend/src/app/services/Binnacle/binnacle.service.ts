import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Binnacle } from 'src/app/model/Binnacle/binnacle';

@Injectable({
  providedIn: 'root'
})
export class BinnacleService {
  private url:string="http://localhost:8081/api/BINNACLES"
  constructor(private http:HttpClient) { }

  saveBinnacle(binnacle:Binnacle):Observable<Binnacle>{
    return this.http.post<Binnacle>(this.url,binnacle);
  }

  getBinnacleById(id:number):Observable<Binnacle>{
    return this.http.get<Binnacle>(this.url + `/${id}`);
  }

  listBinnacles():Observable<Set<Binnacle>>{
    return this.http.get<Set<Binnacle>>(this.url)
  }

  updateBinnacle(binnacle:Binnacle):Observable<Binnacle>{
    return this.http.put<Binnacle>(this.url+`/${binnacle.idBinnacle}`,binnacle);
  }

  deleteBinnacle(id:number):Observable<Binnacle>{
    return this.http.delete<Binnacle>(this.url + `/${id}`);
  }

}
