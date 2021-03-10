import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'pokemon-detail-page',
    templateUrl: './pokemon-detail-page.component.html',
    styleUrls: ['./pokemon-detail-page.component.css']
})

export class PokemonDetailPage {
    id: string
    constructor(private readonly route:ActivatedRoute){}

    ngOnInit():void {
        this.id = this.route.snapshot.paramMap.get('id');
    }
}