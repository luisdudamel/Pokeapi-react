import { Pokemon as PokemonType } from "../../types/pokemon";
import Pokemon from "../Pokemon/Pokemon";
import {
    StyledPokemonList,
    StyledPokemonListContainer,
} from "./StyledPokemonList";

interface PokemonListProps {
    pokemons: PokemonType[];
}

const PokemonList = ({ pokemons }: PokemonListProps): JSX.Element => {
    return (
        <StyledPokemonListContainer>
            <StyledPokemonList>
                {pokemons?.length
                    ? pokemons?.map((pokemon) => (
                          <Pokemon pokemon={pokemon} key={pokemon.index} />
                      ))
                    : "No more pokemons"}
            </StyledPokemonList>
        </StyledPokemonListContainer>
    );
};

export default PokemonList;
