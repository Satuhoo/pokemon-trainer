import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
    providedIn: 'root'
})

export class SessionGuard implements CanActivate {

    constructor(
        private readonly sessionService: SessionService, 
        private readonly router: Router){}
    
    canActivate (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            
            if (this.sessionService.active()) {
                return true;
            } else {
                this.router.navigateByUrl('/login')
                return false;
            }
        }
}