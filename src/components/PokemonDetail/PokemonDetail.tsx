import { Pokemon } from "../../types/pokemon";
import { PokemonDetailStyled } from "./PokemonDetailStyled";

interface PokemonDetailProps {
    pokemon: Pokemon;
}

const PokemonDetail = ({ pokemon }: PokemonDetailProps): JSX.Element => {
    return (
        <PokemonDetailStyled>
            <div className="game-boy-wrapper">
                <div className="game-boy">
                    <div className="game-boy-screen">
                        <div className="screen-info-wrapper--left">
                            <h2>
                                {pokemon.name.charAt(0).toUpperCase() +
                                    pokemon.name.slice(1)}
                            </h2>
                            <p>
                                Pokemon Type:{" "}
                                {pokemon.type.charAt(0).toUpperCase() +
                                    pokemon.type.slice(1)}
                            </p>
                            <p>Weight: {pokemon.weight}kg</p>
                        </div>
                        <div className="screen-info-wrapper--right">
                            <img
                                className="pokemon-image"
                                src={pokemon.imageHD}
                                alt={`${
                                    pokemon.name.charAt(0).toUpperCase() +
                                    pokemon.name.slice(1)
                                } in 8bits`}
                            />
                        </div>
                    </div>
                    <div className="controls-wrapper">
                        <div className="cross"></div>
                        <div className="circle-buttons"></div>
                    </div>
                </div>
            </div>
        </PokemonDetailStyled>
    );
};

export default PokemonDetail;
