import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credential } from 'src/app/model/Credential/credential';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

  constructor(private http:HttpClient) { }
  private url:string="http://localhost:8080/login";

  login(creds: Credential){
    return this.http.post(this.url,creds,{
      observe: 'response'
    }).pipe(map((response:HttpResponse<any>)=>{
      const body = response.body;
      const headers = response.headers;
      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ','');
      localStorage.setItem('token',token);
      return body;
    }));
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
