import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon.model';

@Component({
    selector: 'pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})

export class Pokemon {
    @Input() pokemon: PokemonModel;

    @Output() showPokemonDetails: EventEmitter<any> = new EventEmitter();

    sendPokemonDetail() {
        this.showPokemonDetails.emit(this.pokemon['id'])
    }
}