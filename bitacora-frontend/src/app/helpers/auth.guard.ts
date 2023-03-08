import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticatorService } from '../services/Authenticator/authenticator.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private log:AuthenticatorService, private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.log.getToken()) {
        return true;
      }
      this.router.navigate(['/']);
      return false;    
  }
  
}
