import SearchBar from "../SearchBar/SearchBar";
import { HeaderStyled } from "./HeaderStyled";

interface HeaderProps {
    pokemonNames: string[];
}

const Header = ({ pokemonNames }: HeaderProps): JSX.Element => {
    return (
        <HeaderStyled>
            <h1 className="main-heading">POKE-REACT</h1>
            <SearchBar pokemons={pokemonNames} />
        </HeaderStyled>
    );
};

export default Header;
