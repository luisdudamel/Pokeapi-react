import { PokemonDetailStyled } from "./PokemonDetailStyled";

const PokemonDetail = (): JSX.Element => {
    return (
        <PokemonDetailStyled>
            <h2>Pikachu</h2>
            <img src="../../pikachu.jpg" alt="Pikachu un 8bits" />
            <p>Pokemon Type: Electric</p>
            <p>Weight: 14kg</p>
        </PokemonDetailStyled>
    );
};

export default PokemonDetail;
