import {
    SearchBarStyled,
    SearchClearButtonStyled,
    SearchInputStyled,
    SearchResult,
    SearchResultsOverlay,
    UnexistentFeedbackStyled,
} from "./SearchBarStyled";
import { useState } from "react";
import { filterSearch } from "./filterSearch";
import usePokemon from "../../hooks/usePokemon";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

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

    const pokemonFiltered = filterSearch(
        pokemons,
        searchFormData.searchText.toLowerCase()
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFormData({
            ...searchFormData,
            searchText: event.target.value,
        });
    };

    const clearSearch = () => {
        setSearchFormData({ searchText: "" });
    };

    const navigateToSearchedPokemon = async (pokemonName: string) => {
        const getPokemonResponse = await getPokemonById(pokemonName);

        navigate(`/pokemon/${getPokemonResponse.index.toString()}`);
    };

    return (
        <SearchBarStyled onSubmit={(event) => handleSubmit(event)}>
            <div className="search-bar-container">
                <label htmlFor="search-input" aria-label="search-input" />
                <SearchInputStyled
                    type="text"
                    autoComplete="off"
                    id="search-input"
                    placeholder="Search a pokemon!"
                    value={searchFormData.searchText}
                    onChange={(event) => handleFormChange(event)}
                ></SearchInputStyled>
                <SearchClearButtonStyled
                    className={
                        !searchFormData.searchText ? "clear-button-hidden" : ""
                    }
                    onClick={() => clearSearch()}
                >
                    <FontAwesomeIcon icon={faTimesCircle} />
                </SearchClearButtonStyled>
            </div>
            <div className="search-overlay-container">
                {searchFormData.searchText && (
                    <SearchResultsOverlay aria-label="pokemon-list">
                        {pokemonFiltered.length > 0 ? (
                            pokemonFiltered.map((pokemon) => (
                                <SearchResult
                                    onClick={() =>
                                        navigateToSearchedPokemon(pokemon)
                                    }
                                    key={pokemon}
                                >
                                    {pokemon.charAt(0).toUpperCase() +
                                        pokemon.slice(1)}
                                </SearchResult>
                            ))
                        ) : (
                            <UnexistentFeedbackStyled>
                                Pokemon doesn't exist!
                            </UnexistentFeedbackStyled>
                        )}
                    </SearchResultsOverlay>
                )}
            </div>
        </SearchBarStyled>
    );
};

export default SearchBar;
