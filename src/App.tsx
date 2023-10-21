import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Pokemon from "./components/Pokemon/Pokemon";
import usePokemon from "./hooks/usePokemon";

const App = (): JSX.Element => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon";
    const { getPokemons } = usePokemon(apiUrl);
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
                <div className="pokemon-list">
                    {totalPokemons?.length
                        ? totalPokemons?.map((pokemon) => (
                              <Pokemon pokemon={pokemon} key={pokemon.index} />
                          ))
                        : "No more pokemons"}
                </div>
            </div>
        </>
    );
};

export default App;
