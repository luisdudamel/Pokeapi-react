import { useCallback } from "react";
import { ApiPokemonData, ApiPokemonResponse, Pokemon } from "../types/pokemon";

const usePokemon = (pokemonUrl: string) => {
    const getPokemons = useCallback(
        async (
            currentOffset: string
        ): Promise<{
            pokemons: Pokemon[];
            totalPokemon: ApiPokemonResponse;
        }> => {
            const totalPokemonsResponse = await fetch(
                `${pokemonUrl}?offset=${currentOffset}&limit=20/`
            );

            const totalPokemonCount =
                (await totalPokemonsResponse.json()) as ApiPokemonResponse;

            const currentPokemonsData = await Promise.all(
                totalPokemonCount.results.map(async (pokemonResponse) => {
                    return (
                        await fetch(pokemonResponse.url)
                    ).json() as Promise<ApiPokemonData>;
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

            return { pokemons, totalPokemon: totalPokemonCount };
        },
        [pokemonUrl]
    );

    return { getPokemons };
};

export default usePokemon;
