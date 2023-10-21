import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Pokemon from "./components/Pokemon/Pokemon";
import usePokemon from "./hooks/usePokemon";

const App = (): JSX.Element => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon";
    const { getPokemons } = usePokemon(apiUrl);
    const [totalPokemons, setTotalPokemons] = useState<Pokemon[]>();
    useEffect(() => {
        (async () => {
            setTotalPokemons(await getPokemons());
        })();
    }, [getPokemons]);

    return (
        <>
            <div className="main-container">
                <h1 className="main-heading">POKE-REACT</h1>
                <Button
                    buttonAction={() => {
                        console.log("holis");
                    }}
                    buttonText="Get all pokemons"
                />
                <div className="pokemon-list">
                    {totalPokemons?.map((pokemon) => (
                        <Pokemon pokemon={pokemon} key={pokemon.index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default App;
