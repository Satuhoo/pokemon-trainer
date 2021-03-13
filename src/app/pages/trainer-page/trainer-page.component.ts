import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'trainer-page',
    templateUrl: './trainer-page.component.html',
    styleUrls: ['./trainer-page.component.css']
})

export class TrainerPage {
    catchedPokemons: any[] = [];

    constructor(private readonly router:Router,
        private readonly storageService: StorageService){
    }

    ngOnInit(): void {
        this.storageService.getCatchedPokemons();
        this.catchedPokemons = this.storageService.getCatchedPokemons();
    }

    showPokemonDetails(pokemonId) {
        this.router.navigateByUrl(`pokemons/${pokemonId}`)
    }
}