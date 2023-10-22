import Button from "../Button/Button";
import {
    SearchBarStyled,
    SearchInputStyled,
    SearchResult,
    SearchResultsOverlay,
} from "./SearchBarStyled";
import { useState } from "react";
import { filterSearch } from "./filterSearch";
import usePokemon from "../../hooks/usePokemon";
import { useNavigate } from "react-router-dom";

interface FormData {
    searchText: string;
}

interface SearchBarProps {
    pokemons: string[];
}

const SearchBar = ({ pokemons }: SearchBarProps): JSX.Element => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { getPokemonById } = usePokemon(apiUrl as string);
    const navigate = useNavigate();
    const [searchFormData, setSearchFormData] = useState<FormData>({
        searchText: "",
    });
    const [unexistentPokemon, setUnexistentPokemon] = useState<boolean>(true);

    const pokemonFiltered = filterSearch(pokemons, searchFormData.searchText);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target);
    };

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUnexistentPokemon(true);
        setSearchFormData({
            ...searchFormData,
            searchText: event.target.value,
        });
    };

    const navigateToSearchedPokemon = async (pokemonName: string) => {
        if (!pokemonFiltered.includes(pokemonName)) {
            setUnexistentPokemon(false);
            return;
        }
        const getPokemonResponse = await getPokemonById(pokemonName);

        navigate(`/pokemon/${getPokemonResponse.index.toString()}`);
    };

    return (
        <>
            {!unexistentPokemon && <p>Pokemon doesn't exist!</p>}
            <SearchBarStyled onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="search-input" />
                <SearchInputStyled
                    type="text"
                    id="search-input"
                    placeholder="Search a pokemon!"
                    value={searchFormData.searchText}
                    onChange={(event) => handleFormChange(event)}
                ></SearchInputStyled>
                <Button
                    buttonText="Search"
                    buttonAction={() =>
                        navigateToSearchedPokemon(searchFormData.searchText)
                    }
                />
                {searchFormData.searchText && (
                    <div>
                        <SearchResultsOverlay>
                            {pokemonFiltered.map((pokemon) => (
                                <SearchResult
                                    onClick={() =>
                                        navigateToSearchedPokemon(pokemon)
                                    }
                                >
                                    {pokemon.charAt(0).toUpperCase() +
                                        pokemon.slice(1)}
                                </SearchResult>
                            ))}
                        </SearchResultsOverlay>
                    </div>
                )}
            </SearchBarStyled>
        </>
    );
};

export default SearchBar;
