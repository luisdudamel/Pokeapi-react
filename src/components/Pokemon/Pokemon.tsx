import { type Pokemon } from "../../types/pokemon";
import {
    StyledPokemon,
    StyledPokemonImage,
    StyledPokemonName,
    StyledPokemonStats,
} from "./StyledPokemon";

interface PokemonProps {
    pokemon: Pokemon;
}

const Pokemon = ({ pokemon }: PokemonProps): JSX.Element => {
    return (
        <StyledPokemon>
            <StyledPokemonName>{pokemon.name}</StyledPokemonName>
            <StyledPokemonImage src={pokemon.image} />
            <StyledPokemonStats>
                <li>Type: {pokemon.type}</li>
                <li>Weight: {pokemon.weight}</li>
                <li>Index: {pokemon.index}</li>
            </StyledPokemonStats>
        </StyledPokemon>
    );
};

export default Pokemon;
