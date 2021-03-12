import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SessionService {
    active(): boolean {
        const user = localStorage.getItem('userName');
        return Boolean(user);
    }
}