import styled from "styled-components";

export const PokemonDetailStyled = styled.article`
    width: 100%;
    height: 50vh;
    border: solid 2px red;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        height: 200px;
    }

    h2 {
        letter-spacing: 10px;
    }
`;
