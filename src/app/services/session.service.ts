import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

//Checks if the user is logged in
export class SessionService {
    active(): boolean {
        const user = localStorage.getItem('userName');
        return Boolean(user);
    }
}