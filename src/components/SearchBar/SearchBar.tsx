import Button from "../Button/Button";
import { SearchBarStyled, SearchInputStyled } from "./SearchBarStyled";

const SearchBar = (): JSX.Element => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <SearchBarStyled onSubmit={(event) => handleSubmit(event)}>
            <SearchInputStyled></SearchInputStyled>
            <Button buttonText="Buscar" buttonAction={() => {}} />
        </SearchBarStyled>
    );
};

export default SearchBar;
