import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Pokemon from "./components/Pokemon/Pokemon";
import usePokemon from "./hooks/usePokemon";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";
import PokemonPage from "./pages/PokemonPage/PokemonPage";
import SearchBar from "./components/SearchBar/SearchBar";

const App = (): JSX.Element => {
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

    const router = createBrowserRouter([
        {
            path: "/",
            element: <ListPage totalPokemons={totalPokemons!} />,
        },
        {
            path: "pokemon/:pokemonId",
            element: <PokemonPage />,
        },
    ]);

    return (
        <>
            {" "}
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
            <RouterProvider router={router} />
        </>
    );
};

export default App;
