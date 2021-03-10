import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonModel } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon-service';

@Component({
    selector: 'pokemon-detail-page',
    templateUrl: './pokemon-detail-page.component.html',
    styleUrls: ['./pokemon-detail-page.component.css']
})

export class PokemonDetailPage {
    id: number
    pokemon: PokemonModel;

    constructor(private readonly route:ActivatedRoute, private pokemonService: PokemonService){}

    ngOnInit():void {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.pokemon = this.pokemonService.getPokemonById(this.id);
    }
}