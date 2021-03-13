import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor(
        private readonly router: Router){}

    logIn(userName) {
        if (userName !== '') {
            localStorage.setItem('userName', userName);
            this.router.navigateByUrl('/')
        }   
    }

    logOut() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }

    getCatchedPokemons(): any[] {
        const catchedPokemons: any[] =  JSON.parse(localStorage.getItem("catchedPokemons"));
        return catchedPokemons;
    }

    addCatchedPokemon(pokemon: any){
        let pokemons: any[] = this.getCatchedPokemons()
        if (pokemons === null) {
            pokemons = [];
        }
        pokemons.push(pokemon)
        localStorage.setItem("catchedPokemons", JSON.stringify(pokemons));
    }

    catched(id: number): boolean {
        const storedPokemons: any[] = this.getCatchedPokemons();
        return storedPokemons.some(function(pokemon) {
            return pokemon.id === id;
        });
    }
}