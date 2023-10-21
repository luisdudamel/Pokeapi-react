import { Pokemon } from "../../types/pokemon";
import { PokemonDetailStyled } from "./PokemonDetailStyled";

interface PokemonDetailProps {
    pokemon: Pokemon;
}

const PokemonDetail = ({ pokemon }: PokemonDetailProps): JSX.Element => {
    return (
        <PokemonDetailStyled>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={`${pokemon.name} en 8bits`} />
            <p>Pokemon Type: {pokemon.type}</p>
            <p>Weight: {pokemon.weight}kg</p>
        </PokemonDetailStyled>
    );
};

export default PokemonDetail;
