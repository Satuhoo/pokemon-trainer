import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor(private readonly router: Router){}

    //Checks if the typed username is valid and saves it to local storage
    logIn(userName) {
        if (userName !== '') {
            localStorage.setItem('userName', userName);
            this.router.navigateByUrl('/') //Navigates to landing page after logging in
        }   
    }

    //Logs user out and clears all data from local storage
    logOut() {
        localStorage.clear();
        this.router.navigateByUrl('/login'); //Navigates to login page
    }

    //Fetches list of catched pokemons from storage and returns it
    getCatchedPokemons(): any[] {
        const catchedPokemons: any[] =  JSON.parse(localStorage.getItem("catchedPokemons"));
        return catchedPokemons;
    }

    //Adds new pokemon to the list of previously stored pokemons and saves it to storage
    addCatchedPokemon(pokemon: any){
        let pokemons: any[] = this.getCatchedPokemons()
        if (pokemons === null) {
            pokemons = [];
        }
        pokemons.push(pokemon)
        localStorage.setItem("catchedPokemons", JSON.stringify(pokemons));
    }

    //Checks if the pokemon is already in the list of catched pokemons
    catched(id: number): boolean {
        const storedPokemons: any[] = this.getCatchedPokemons();
        if (storedPokemons !== null) {
            return storedPokemons.some(function(pokemon) {
                return pokemon.id === id;
            })
        } else {
            return false;
        }
    }
}