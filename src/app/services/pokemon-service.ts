import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    private readonly pokemonCache$;
    private _pokemons: any[] = [];
    public error: string = '';
    fetchLimit: number = 150;
    private _offset: number = 0;
    limit: number = 12;

    constructor(private readonly http: HttpClient){
        this.pokemonCache$ = this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.fetchLimit}&${this.offset}`)
        .pipe(shareReplay(1))
    }

    get pokemons(): any[] {
        return this._pokemons.slice(
            this._offset,
            this._offset + this.limit
        );
    }

    get offset(): number {
        return this._offset;
    }

    public next(): void {
        this._offset += this.limit;
    }

    public prev(): void {
        this._offset -= this.limit;
    }

    fetchPokemons(): void {
        this.pokemonCache$
            .pipe(
                map((response: any) => response.results)
            )
            .subscribe(
                (pokemons: any) => {
                    for (let index in pokemons) {
                        pokemons[index].id = this.getId(pokemons[index].url)
                        pokemons[index].imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemons[index].id}.svg`
                        console.log(pokemons[index])
                    }
                    this._pokemons = pokemons;
                },
                error => {
                    this.error = error.message;
                }
            )
    }

    getId(url: string): number {
        return parseInt(url.split('/').filter(Boolean).pop());
    }

    getPokemonById(id: number): any {
        let poke: any = {};
        this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .subscribe((data: any) => {
            poke.id = data.id
            poke.name = data.name
            poke.imageUrl = data.sprites.other.dream_world.front_default
            poke.type = data.types[0].type.name
            poke.baseStats = data.stats
            poke.height = data.height
            poke.weight = data.weight
            poke.abilities = data.abilities
            poke.baseExperience = data.base_experience
            poke.moves = data.moves
        })
        return poke;
    }
}