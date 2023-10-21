import { useCallback } from "react";
import { ApiPokemonResponse, Pokemon } from "../types/pokemon";

const usePokemon = (pokemonUrl: string) => {
    const getPokemons = useCallback(async (): Promise<Pokemon[]> => {
        const totalPokemonsResponse = await fetch(
            `${pokemonUrl}?offset=0&limit=20/`
        );

        const currentPokemonsData = await Promise.all(
            (
                (await totalPokemonsResponse.json()) as ApiPokemonResponse
            ).results.map(async (pokemonResponse) => {
                return (await fetch(pokemonResponse.url)).json();
            })
        );
        const pokemons = currentPokemonsData.map((pokemon): Pokemon => {
            return {
                name: pokemon.name,
                type: pokemon.types[0].type.name,
                weight: pokemon.weight,
                index: pokemon.id,
                image: pokemon.sprites.front_default,
            };
        });

        return pokemons;
    }, [pokemonUrl]);

    return { getPokemons };
};

export default usePokemon;
