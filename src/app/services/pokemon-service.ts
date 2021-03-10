import { Injectable } from '@angular/core';
import { pokemons } from '../mocks/pokemons.mock';
import { PokemonModel } from '../models/pokemon.model';

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    constructor(){}

    getPokemons(): PokemonModel[] {
        console.log(pokemons)
        return pokemons;
    }

    getPokemonById(id: number): PokemonModel {
        return pokemons[id - 1];
    }
}