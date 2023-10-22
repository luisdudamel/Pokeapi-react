export type Pokemon = {
    name: string;
    type: string;
    weight: number;
    index: number;
    image: string;
    imageHD: string;
    abilites: string[];
};

export type ApiPokemon = {
    name: string;
    url: string;
};

export type ApiPokemonData = {
    name: string;
    type: string;
    weight: number;
    id: number;
    types: [
        {
            type: {
                name: string;
            };
        },
    ];
    sprites: {
        front_default: string;
        other: { dream_world: { front_default: string } };
    };
    abilities: [
        {
            ability: {
                name: string;
                url: string;
            };
        },
    ];
};

export type ApiPokemonResponse = {
    count: number;
    next: string;
    previous: null | string;
    results: ApiPokemon[];
};

export type ApiPokemonStats = {
    currentMaxPokemon: number;
    pokemonNames: string[];
};
