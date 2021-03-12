import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})

export class LoginForm {
    
    constructor(private readonly router: Router){}
    onFormSubmit(form) {
        console.log( form.value );
        if (form.value !== '') {
            localStorage.setItem('userName', form.value.userName);
            this.router.navigateByUrl('/')
        }
        
      }
}