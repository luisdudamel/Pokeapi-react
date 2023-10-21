import { styled } from "styled-components";

export const StyledPokemon = styled.li`
    border: solid 2px red;
    height: 300px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledPokemonName = styled.h3`
    font-family: "Roboto";
`;

export const StyledPokemonImage = styled.img`
    width: 100px;
`;

export const StyledPokemonStats = styled.ul`
    list-style: none;
    padding-left: 0px;
`;
