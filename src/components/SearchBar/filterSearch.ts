import { Pokemon } from "../../types/pokemon";

export const filterSearch = (pokemons: string[], search: string) => {
    if (!search) {
        return pokemons;
    }

    return pokemons.filter((pokemon) => {
        const pokemonName = pokemon.toLowerCase();
        return pokemonName.includes(search);
    });
};
