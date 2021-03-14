import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})

export class LoginForm {
    constructor(private readonly storageService: StorageService){}
    
    onFormSubmit(form) {
        this.storageService.logIn(form.value.userName)
    }
}