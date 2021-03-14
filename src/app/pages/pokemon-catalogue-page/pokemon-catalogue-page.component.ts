import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon-service';

@Component({
    selector: 'pokemon-catalogue-page',
    templateUrl: './pokemon-catalogue-page.component.html',
    styleUrls: ['./pokemon-catalogue-page.component.css']
})

export class PokemonCataloguePage {
    showPreviousButton: boolean = true;
    showNextButton: boolean = true;

    constructor(private readonly router:Router, private pokemonService: PokemonService){}

    ngOnInit(): void {
        this.pokemonService.fetchPokemons();
        //Checks value of offset and changes values of shown buttons if it's the first or the last page
        if (this.offset == 0) {
            this.showPreviousButton = false;
        } 
        if (this.offset >= this.pokemonService.fetchLimit - this.offset) {
            this.showNextButton = false;
        }
    }

    get pokemons() {
        return this.pokemonService.pokemons;
    }

    get offset() {
        return this.pokemonService.offset;
    }

    //Waits the pokemonId from Child component and navigates to pokemon detail page when a pokemon is clicked
    showPokemonDetails(pokemonId) {
        this.router.navigateByUrl(`pokemons/${pokemonId}`)
    }

    //Handles the changes of shown button values and calls 'prev' method in services
    previousPokemons(): void {
        this.pokemonService.prev();
        this.showNextButton = true;
        if (this.offset == 0) {
            this.showPreviousButton = false;
        }
    }

    //Handles the changes of shown button values and calls 'next' method in services
    nextPokemons(): void {
        this.pokemonService.next();
        this.showPreviousButton = true;
        if (this.offset >= this.pokemonService.fetchLimit - this.offset) {
            this.showNextButton = false;
        }
    }
}