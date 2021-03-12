export interface PokemonModel {
    id: number,
    name: string;
    imageUrl: string;
    type: string;
    baseStats: [];
    height: number;
    weight: number;
    abilities: [];
    baseExperience: number;
    moves: [];
}