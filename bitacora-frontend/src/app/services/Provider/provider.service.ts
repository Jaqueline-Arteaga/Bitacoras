import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from 'src/app/model/Provider/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private url:string="http://localhost:8081/api/PROVIDERS"
  constructor(private http:HttpClient) { }

  saveProvider(provider:Provider):Observable<Provider>{
    return this.http.post<Provider>(this.url,provider);
  }

  getProviderById(id:number):Observable<Provider>{
    return this.http.get<Provider>(this.url + `/${id}`)
  }

  listProviders():Observable<Set<Provider>>{
    return this.http.get<Set<Provider>>(this.url);
  }

  updateProvider(provider:Provider):Observable<Provider>{
    return this.http.put<Provider>(this.url + `/${provider.idProvider}`,provider)
  }

  deleteProvider(id:number):Observable<Provider>{
    return this.http.delete(this.url + `/${id}`);
  }

}
