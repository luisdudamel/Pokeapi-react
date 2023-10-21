import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonDetail from "../../components/PokemonDetail/PokemonDetail";
import usePokemon from "../../hooks/usePokemon";
import { Pokemon } from "../../types/pokemon";

const PokemonPage = (): JSX.Element => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { pokemonId } = useParams();
    const { getPokemonById } = usePokemon(apiUrl);
    const [currentPokemon, setCurrentPokemon] = useState<Pokemon>();

    useEffect(() => {
        (async () => {
            if (pokemonId) {
                setCurrentPokemon(await getPokemonById(pokemonId));
            }
        })();
    }, [getPokemonById, pokemonId]);

    return (
        <div>
            {currentPokemon && <PokemonDetail pokemon={currentPokemon!} />}
        </div>
    );
};

export default PokemonPage;
