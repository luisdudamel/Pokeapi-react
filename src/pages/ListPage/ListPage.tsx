import { useState, useEffect } from "react";
import PokemonList from "../../components/PokemonList/PokemonList";
import usePokemon from "../../hooks/usePokemon";
import { Pokemon } from "../../types/pokemon";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ListPage = (): JSX.Element => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { getPokemons, pokemonNames } = usePokemon(apiUrl as string);
    const [totalPokemons, setTotalPokemons] = useState<Pokemon[]>();

    useEffect(() => {
        (async () => {
            const pokeData = await getPokemons("0");
            setTotalPokemons(pokeData.pokemons);
        })();
    }, [getPokemons]);

    return (
        <>
            <div className="main-container">
                <Header pokemonNames={pokemonNames} />
                <PokemonList pokemons={totalPokemons!} />
                <Footer />
            </div>
        </>
    );
};

export default ListPage;
