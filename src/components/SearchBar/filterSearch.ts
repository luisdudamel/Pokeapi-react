export const filterSearch = (pokemons: string[], search: string) => {
    return pokemons.filter((pokemon) => {
        const pokemonName = pokemon.toLowerCase();
        return pokemonName.includes(search);
    });
};
