import { useCallback, useState, useEffect } from "react";
import { ApiPokemonData, ApiPokemonResponse, Pokemon } from "../types/pokemon";

const usePokemon = (pokemonUrl: string) => {
    const [pokemonNames, setPokemonNames] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            const currentNamesBatch = (await (
                await fetch(pokemonUrl as string)
            ).json()) as ApiPokemonResponse;

            const totalPokemonNames = (await (
                await fetch(
                    `${pokemonUrl}?offset=0&limit=${currentNamesBatch.count}/`
                )
            ).json()) as ApiPokemonResponse;
            setPokemonNames(
                totalPokemonNames.results.map((result) => result.name)
            );
        })();
    }, [pokemonUrl]);

    const getPokemons = useCallback(
        async (
            currentOffset: string
        ): Promise<{
            pokemons: Pokemon[];
            totalPokemon: ApiPokemonResponse;
        }> => {
            const totalPokemonsResponse = await fetch(
                `${pokemonUrl}?offset=${currentOffset}&limit=10/`
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

    const getPokemonById = useCallback(
        async (id: string): Promise<Pokemon> => {
            const pokemonResponse = await fetch(`${pokemonUrl}/${id}`);

            const pokemonData =
                (await pokemonResponse.json()) as ApiPokemonData;

            return {
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
                index: pokemonData.id,
                type: pokemonData.types[0].type.name,
                weight: pokemonData.weight,
            };
        },

        [pokemonUrl]
    );

    return { getPokemons, getPokemonById, pokemonNames };
};

export default usePokemon;
