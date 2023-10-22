import Button from "../Button/Button";
import { SearchBarStyled, SearchInputStyled } from "./SearchBarStyled";
import { useState } from "react";
import { filterSearch } from "./filterSearch";

interface FormData {
    searchText: string;
}

interface SearchBarProps {
    pokemons: string[];
}

const SearchBar = ({ pokemons }: SearchBarProps): JSX.Element => {
    const [searchFormData, setSearchFormData] = useState<FormData>({
        searchText: "",
    });

    const pokemonFiltered = filterSearch(pokemons, searchFormData.searchText);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target);
    };

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFormData({
            ...searchFormData,
            searchText: event.target.value,
        });
    };

    return (
        <SearchBarStyled onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="search-input" />
            <SearchInputStyled
                type="text"
                id="search-input"
                placeholder="Search a pokemon!"
                value={searchFormData.searchText}
                onChange={(event) => handleFormChange(event)}
            ></SearchInputStyled>
            <Button buttonText="Search" buttonAction={() => {}} />
        </SearchBarStyled>
    );
};

export default SearchBar;
