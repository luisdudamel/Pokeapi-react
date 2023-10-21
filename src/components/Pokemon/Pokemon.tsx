import { useNavigate } from "react-router-dom";
import { type Pokemon } from "../../types/pokemon";
import {
    StyledPokemon,
    StyledPokemonImage,
    StyledPokemonListItem,
    StyledPokemonName,
    StyledPokemonStats,
} from "./StyledPokemon";

interface PokemonProps {
    pokemon: Pokemon;
}

const Pokemon = ({ pokemon }: PokemonProps): JSX.Element => {
    const navigate = useNavigate();

    return (
        <StyledPokemon onClick={() => navigate(`pokemon/${pokemon.index}`)}>
            <StyledPokemonName>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </StyledPokemonName>
            <StyledPokemonImage
                src={pokemon.image}
                alt={`${
                    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                } in 8bits`}
            />
            <StyledPokemonStats>
                <li>
                    <StyledPokemonListItem>Type: </StyledPokemonListItem>
                    {pokemon.type.charAt(0).toUpperCase() +
                        pokemon.type.slice(1)}
                </li>
                <li>
                    <StyledPokemonListItem>Weight: </StyledPokemonListItem>
                    {pokemon.weight}kg
                </li>
                <li>
                    <StyledPokemonListItem>Index: </StyledPokemonListItem> #
                    {pokemon.index}
                </li>
            </StyledPokemonStats>
        </StyledPokemon>
    );
};

export default Pokemon;
