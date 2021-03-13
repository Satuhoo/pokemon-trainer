import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css']
})

export class AppHeaderComponent{
    constructor(
        private readonly sessionService: SessionService,
        private readonly storageService: StorageService){}

    get active(): boolean {
        return this.sessionService.active();
    }
}