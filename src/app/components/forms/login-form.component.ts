import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})

export class LoginForm {
    
    constructor(
        private readonly router: Router,
        private readonly loginService: LoginService){}
    
    onFormSubmit(form) {
        console.log( form.value );
        this.loginService.logIn(form.value.userName)
      }
}