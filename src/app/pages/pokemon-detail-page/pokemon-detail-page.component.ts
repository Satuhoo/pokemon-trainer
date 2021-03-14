import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonModel } from '../../models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon-service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'pokemon-detail-page',
    templateUrl: './pokemon-detail-page.component.html',
    styleUrls: ['./pokemon-detail-page.component.css']
})

export class PokemonDetailPage {
    id: number
    pokemon: PokemonModel;
    catched: boolean; //Defines if the collect button is shown

    constructor(
        private readonly route:ActivatedRoute, 
        private readonly pokemonService: PokemonService,
        private readonly storageService: StorageService){}

    ngOnInit():void {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.pokemon = this.pokemonService.getPokemonById(this.id);
        this.catched = this.storageService.catched(this.id);
    }

    //Calls method which saves catched pokemon to storage when catch button is clicked
    collect(): void {
        this.storageService.addCatchedPokemon(this.pokemon);
        this.catched = !this.catched
    }
}