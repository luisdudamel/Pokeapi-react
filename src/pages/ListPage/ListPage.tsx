import { useState, useEffect } from "react";
import PokemonList from "../../components/PokemonList/PokemonList";
import usePokemon from "../../hooks/usePokemon";
import { Pokemon } from "../../types/pokemon";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ListPage = (): JSX.Element => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { getPokemons, pokemonNames } = usePokemon(apiUrl as string);
    const [totalPokemons, setTotalPokemons] = useState<Pokemon[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        (async () => {
            const pokeData = await getPokemons(currentPage.toString());
            setTotalPokemons(pokeData.pokemons);
        })();
    }, [getPokemons, currentPage]);

    return (
        <>
            <div className="main-container">
                <Header pokemonNames={pokemonNames} />
                <PokemonList pokemons={totalPokemons!} />
                <Footer
                    pokemonsShown={currentPage + 10}
                    totalPokemons={pokemonNames.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </>
    );
};

export default ListPage;
