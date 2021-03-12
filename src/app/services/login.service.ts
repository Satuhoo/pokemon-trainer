import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    constructor(
        private readonly router: Router){}

        logIn(userName) {
            if (userName !== '') {
                localStorage.setItem('userName', userName);
                this.router.navigateByUrl('/')
            }
            
          }

    logOut() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }
}