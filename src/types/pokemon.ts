export type Pokemon = {
    name: string;
    type: string;
    weight: number;
    index: number;
    image: string;
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
    sprites: { front_default: string };
};

export type ApiPokemonResponse = {
    count: number;
    next: string;
    previous: null | string;
    results: ApiPokemon[];
};
