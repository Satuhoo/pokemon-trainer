import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon-service'; 
import { PokemonModel } from '../../models/pokemon.model';

@Component({
    selector: 'pokemon-catalogue-page',
    templateUrl: './pokemon-catalogue-page.component.html',
    styleUrls: ['./pokemon-catalogue-page.component.css']
})

export class PokemonCataloguePage {
    //pokemons: PokemonModel[] = [];

    constructor(private readonly router:Router, private pokemonService: PokemonService){}

    ngOnInit(): void {
        this.pokemonService.getPokemons();
    }

    get pokemons() {
        return this.pokemonService.pokemons;
    }

    showPokemonDetails(pokemonId) {
        this.router.navigateByUrl(`pokemons/${pokemonId}`)
    }
}