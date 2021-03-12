import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css']
})

export class AppHeaderComponent{
    constructor(
        private readonly sessionService: SessionService,
        private readonly loginService: LoginService){}

    get active(): boolean {
        return this.sessionService.active();
    }
}