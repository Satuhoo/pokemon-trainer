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

    showPokemonDetails(pokemonId) {
        this.router.navigateByUrl(`pokemons/${pokemonId}`)
    }

    previousPokemons(): void {
        this.pokemonService.prev();
        this.showNextButton = true;
        if (this.offset == 0) {
            this.showPreviousButton = false;
        }
    }

    nextPokemons(): void {
        this.pokemonService.next();
        this.showPreviousButton = true;
        if (this.offset >= this.pokemonService.fetchLimit - this.offset) {
            this.showNextButton = false;
        }
    }
}