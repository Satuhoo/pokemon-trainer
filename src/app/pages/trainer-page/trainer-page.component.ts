import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'trainer-page',
    templateUrl: './trainer-page.component.html',
    styleUrls: ['./trainer-page.component.css']
})

export class TrainerPage {
    constructor(private readonly router:Router){

    }

    public collectedPokemons = [{
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