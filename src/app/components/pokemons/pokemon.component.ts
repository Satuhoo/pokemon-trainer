import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})

export class Pokemon {
    @Input() pokemon: any;

    @Output() showPokemonDetails: EventEmitter<any> = new EventEmitter();

    sendPokemonDetail() {
        this.showPokemonDetails.emit(this.pokemon.id)
    }
}