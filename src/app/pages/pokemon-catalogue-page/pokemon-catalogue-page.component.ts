import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'pokemon-catalogue-page',
    templateUrl: './pokemon-catalogue-page.component.html',
    styleUrls: ['./pokemon-catalogue-page.component.css']
})

export class PokemonCataloguePage {
    constructor(private readonly router:Router){}

    public pokemons = [{
        Id: 1,
        Name: "Charmander"
    },{
        Id: 2,
        Name: "Bulbasaur" 
    }];

    showPokemonDetails(pokemonId) {
        this.router.navigateByUrl(`pokemons/${pokemonId}`)
    }
}