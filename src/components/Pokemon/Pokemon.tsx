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
            <div className="game-boy-wrapper">
                <div className="game-boy">
                    <div className="game-boy-screen">
                        <div className="screen-info-wrapper--top">
                            <StyledPokemonName>
                                {pokemon.name.charAt(0).toUpperCase() +
                                    pokemon.name.slice(1)}
                            </StyledPokemonName>
                            # {pokemon.index}
                        </div>
                        <div className="screen-info-wrapper--bottom">
                            <StyledPokemonImage
                                src={pokemon.image}
                                alt={`${
                                    pokemon.name.charAt(0).toUpperCase() +
                                    pokemon.name.slice(1)
                                } in 8bits`}
                            />
                            <StyledPokemonStats>
                                <li>
                                    <StyledPokemonListItem>
                                        Type:
                                        <br />
                                    </StyledPokemonListItem>
                                    {pokemon.type.charAt(0).toUpperCase() +
                                        pokemon.type.slice(1)}
                                </li>
                                <li>
                                    <StyledPokemonListItem>
                                        Weight:
                                        <br />
                                    </StyledPokemonListItem>
                                    {pokemon.weight}kg
                                </li>
                            </StyledPokemonStats>
                            <br />
                        </div>
                    </div>
                    <div className="controls-wrapper">
                        <div className="cross"></div>
                        <div className="circle-buttons"></div>
                    </div>
                </div>
            </div>
        </StyledPokemon>
    );
};

export default Pokemon;
