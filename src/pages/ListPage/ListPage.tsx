import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import PokemonList from "../../components/PokemonList/PokemonList";
import SearchBar from "../../components/SearchBar/SearchBar";
import usePokemon from "../../hooks/usePokemon";
import { Pokemon } from "../../types/pokemon";

const ListPage = (): JSX.Element => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { getPokemons, pokemonNames } = usePokemon(apiUrl as string);
    const [totalPokemons, setTotalPokemons] = useState<Pokemon[]>();
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
                <h1 className="main-heading">POKE-REACT</h1>
                <SearchBar pokemons={pokemonNames} />
                <Button
                    buttonAction={() => {
                        if (currentPage !== 0) {
                            setCurrentPage(currentPage - 20);
                        }
                    }}
                    buttonText="Previous"
                />
                <Button
                    buttonAction={() => {
                        setCurrentPage(currentPage + 20);
                    }}
                    buttonText="Next"
                />
            </div>
            <PokemonList pokemons={totalPokemons!} />;
        </>
    );
};

export default ListPage;
