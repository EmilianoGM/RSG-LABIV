import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenService : TokenService,
    private router : Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = this.tokenService.getToken();
      console.log('Token auth', token);
      if(this.tokenService.isLogged() && token.ingresado){
        return true;
      }
      else {
        console.log("auth guard false");
        this.router.navigateByUrl("/login");
        return false;
      }
  }

}
