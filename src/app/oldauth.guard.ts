import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class OldauthGuard implements CanActivate {
  constructor(private auth:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      if(!this.auth.IsAuthenticated()){
        alert('Please Login:checked by Old Auth Guard');
        return false;
      }   
      return true; 
    
  }
  
}
