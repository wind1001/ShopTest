import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate, CanActivateChild{
  constructor(private authService: AuthService,
    private router: Router){

    }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);

  }
  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.isAuthenticated().then((authenticated:boolean)=>{
      console.log('Authenticated');
      if(authenticated){
        return true;
      }
      this.router.navigate(['/']);
      return false;
    })
  }
}
