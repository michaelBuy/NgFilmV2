import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmDetailGuard implements CanActivate {

  constructor(private _router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const id = +route.url[0].path;

    // if(isNaN(id) || id >= 0){
    //   alert('Film inconnu');
    //   this._router.navigate(['/home']);
    //   return false;
    // }
    
    return true;
  }
  
}
